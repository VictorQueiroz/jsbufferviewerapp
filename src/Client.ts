import { boundMethod } from "autobind-decorator";
import {
  Error,
  Request,
  Result,
  decodeMessageResponse,
  encodeMessageRequest,
  messageRequest,
} from "./schema/schema";
import { RequestResult } from "./schema/__types__";
import { Deserializer, Serializer } from "jsbuffer/codec";

export default class Client {
  readonly #queue = new Array<Uint8Array>();
  readonly #serializer;
  readonly #pending = new Map<number, (value: Result | Error) => void>();
  readonly #url;
  #connection: WebSocket | null;
  public constructor(url: string) {
    this.#url = url;
    this.#serializer = new Serializer({
      textEncoder: new TextEncoder(),
    });
    this.#connection = null;
    this.#reconnect();
  }
  #send(value: Uint8Array) {
    if (!this.#connection || this.#connection.readyState !== WebSocket.OPEN) {
      this.#queue.push(value);
      const copy = new Uint8Array(value.byteLength);
      copy.set(value);
      this.#queue.push(copy);
      return;
    }
    this.#connection.send(value);
  }
  public sendMessage<T extends Request>(
    request: T
  ): Promise<RequestResult<T> | Error> {
    const requestId = crypto.getRandomValues(new Int32Array(1))[0];
    return new Promise<RequestResult<T>>((resolve) => {
      this.#serializer.rewind();
      encodeMessageRequest(
        this.#serializer,
        messageRequest({
          requestId,
          request,
        })
      );
      this.#pending.set(requestId, (value) => {
        resolve(value as RequestResult<T>);
      });
      this.#send(this.#serializer.view());
    });
  }
  #reconnect() {
    if (this.#connection !== null) {
      return;
    }
    this.#connection = new WebSocket(this.#url);
    this.#connection.binaryType = "arraybuffer";
    this.#connection.addEventListener("close", this.onClose);
    this.#connection.addEventListener("open", this.onOpen);
    this.#connection.addEventListener("message", this.onMessage);
  }
  @boundMethod private onClose() {
    this.#connection = null;
    console.error("lost connection, reconnecting...");
    this.#reconnect();
  }
  @boundMethod private onOpen() {
    for (const buf of this.#queue.splice(0, this.#queue.length)) {
      this.#send(buf);
    }
  }
  @boundMethod private onMessage(e: MessageEvent) {
    if (!(e.data instanceof ArrayBuffer)) {
      console.error("received invalid message kind: %o", e);
      return;
    }
    const d = new Deserializer({
      buffer: new Uint8Array(e.data),
      textDecoder: new TextDecoder(),
    });
    const res = decodeMessageResponse(d);
    if (!res) {
      console.error("could not decode: %o", e.data);
      return;
    }
    const resolve = this.#pending.get(res.requestId);
    if (typeof resolve !== "function") {
      console.error("could not find request id: %d", res.requestId);
      return;
    }
    resolve(res.result);
  }
}

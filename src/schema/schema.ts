import { ISerializer } from "./__types__";
import { IDeserializer } from "./__types__";
import { IRequest } from "./__types__";
export interface generatedFileInputParams {
  path: string;
  contents: string;
}
export function generatedFile(params: generatedFileInputParams): generatedFile {
  return {
    _name: "schema.generatedFile",
    path: params["path"],
    contents: params["contents"],
  };
}
export function encodeGeneratedFile(s: ISerializer, value: generatedFile) {
  s.writeInt32(-519759154);
  /**
   * encoding param: path
   */
  const __pv0 = value["path"];
  s.writeString(__pv0);
  /**
   * encoding param: contents
   */
  const __pv1 = value["contents"];
  s.writeString(__pv1);
}
export function decodeGeneratedFile(__d: IDeserializer): generatedFile | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -519759154) return null;
  let path: string;
  let contents: string;
  /**
   * decoding param: path
   */
  path = __d.readString();
  /**
   * decoding param: contents
   */
  contents = __d.readString();
  return {
    _name: "schema.generatedFile",
    path,
    contents,
  };
}
export interface generatedFile {
  _name: "schema.generatedFile";
  path: string;
  contents: string;
}
export function defaultGeneratedFile(
  params: Partial<generatedFileInputParams> = {}
): generatedFile {
  return generatedFile({
    path: "",
    contents: "",
    ...params,
  });
}
export function compareGeneratedFile(__a: generatedFile, __b: generatedFile) {
  return (
    /**
     * compare parameter path
     */
    __a["path"] === __b["path"] &&
    /**
     * compare parameter contents
     */
    __a["contents"] === __b["contents"]
  );
}
export function updateGeneratedFile(
  value: generatedFile,
  changes: Partial<generatedFileInputParams>
) {
  if (typeof changes["path"] !== "undefined") {
    if (!(changes["path"] === value["path"])) {
      value = generatedFile({
        ...value,
        path: changes["path"],
      });
    }
  }
  if (typeof changes["contents"] !== "undefined") {
    if (!(changes["contents"] === value["contents"])) {
      value = generatedFile({
        ...value,
        contents: changes["contents"],
      });
    }
  }
  return value;
}
export interface generatedFilesInputParams {
  files: ReadonlyArray<generatedFile>;
}
export function generatedFiles(
  params: generatedFilesInputParams
): generatedFiles {
  return {
    _name: "schema.generatedFiles",
    files: params["files"],
  };
}
export function encodeGeneratedFiles(s: ISerializer, value: generatedFiles) {
  s.writeInt32(1168059267);
  /**
   * encoding param: files
   */
  const __pv0 = value["files"];
  const __l0 = __pv0.length;
  s.writeUint32(__l0);
  for (let __i0 = 0; __i0 < __l0; __i0++) {
    const __v__i0 = __pv0[__i0];
    encodeGeneratedFile(s, __v__i0);
  }
}
export function decodeGeneratedFiles(
  __d: IDeserializer
): generatedFiles | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== 1168059267) return null;
  let files: Array<generatedFile>;
  /**
   * decoding param: files
   */
  {
    const iindex0 = __d.readUint32();
    const oindex0 = new Array(iindex0);
    files = oindex0;
    for (let index0 = 0; index0 < iindex0; index0++) {
      const __tmp1 = decodeGeneratedFile(__d);
      if (__tmp1 === null) return null;
      oindex0[index0] = __tmp1;
    }
  }
  return {
    _name: "schema.generatedFiles",
    files,
  };
}
export interface generatedFiles {
  _name: "schema.generatedFiles";
  files: ReadonlyArray<generatedFile>;
}
export function defaultGeneratedFiles(
  params: Partial<generatedFilesInputParams> = {}
): generatedFiles {
  return generatedFiles({
    files: [],
    ...params,
  });
}
export function compareGeneratedFiles(
  __a: generatedFiles,
  __b: generatedFiles
) {
  return (
    /**
     * compare parameter files
     */
    __a["files"].length === __b["files"].length &&
    __a["files"].every((__i, index) =>
      compareGeneratedFile(__i, __b["files"][index])
    )
  );
}
export function updateGeneratedFiles(
  value: generatedFiles,
  changes: Partial<generatedFilesInputParams>
) {
  if (typeof changes["files"] !== "undefined") {
    if (
      !(
        changes["files"].length === value["files"].length &&
        changes["files"].every((__i, index) =>
          compareGeneratedFile(__i, value["files"][index])
        )
      )
    ) {
      value = generatedFiles({
        ...value,
        files: changes["files"],
      });
    }
  }
  return value;
}
export type Request = GenerateFiles;
export function encodeRequestTrait(s: ISerializer, value: Request) {
  switch (value._name) {
    case "schema.GenerateFiles":
      encodeGenerateFiles(s, value);
      break;
  }
}
export function decodeRequestTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: GenerateFiles;
  switch (__id) {
    case 1800459719: {
      const tmp = decodeGenerateFiles(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    default:
      return null;
  }
  return value;
}
export function defaultRequestTrait() {
  return defaultGenerateFiles();
}
export function compareRequestTrait(__a: Request, __b: Request) {
  switch (__a._name) {
    case "schema.GenerateFiles":
      if (__b._name !== "schema.GenerateFiles") return false;
      return compareGenerateFiles(__a, __b);
  }
}
export type Result =
  | generatedFiles
  | errorInternalServerError
  | errorDetailedParsingError
  | errorParsingError;
export function encodeResultTrait(s: ISerializer, value: Result) {
  switch (value._name) {
    case "schema.generatedFiles":
      encodeGeneratedFiles(s, value);
      break;
    case "schema.errorInternalServerError":
      encodeErrorInternalServerError(s, value);
      break;
    case "schema.errorDetailedParsingError":
      encodeErrorDetailedParsingError(s, value);
      break;
    case "schema.errorParsingError":
      encodeErrorParsingError(s, value);
      break;
  }
}
export function decodeResultTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value:
    | generatedFiles
    | errorInternalServerError
    | errorDetailedParsingError
    | errorParsingError;
  switch (__id) {
    case 1168059267: {
      const tmp = decodeGeneratedFiles(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    case 1951666228: {
      const tmp = decodeErrorInternalServerError(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    case -387976743: {
      const tmp = decodeErrorDetailedParsingError(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    case -629796699: {
      const tmp = decodeErrorParsingError(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    default:
      return null;
  }
  return value;
}
export function defaultResultTrait() {
  return defaultGeneratedFiles();
}
export function compareResultTrait(__a: Result, __b: Result) {
  switch (__a._name) {
    case "schema.generatedFiles":
      if (__b._name !== "schema.generatedFiles") return false;
      return compareGeneratedFiles(__a, __b);
    case "schema.errorInternalServerError":
      if (__b._name !== "schema.errorInternalServerError") return false;
      return compareErrorInternalServerError(__a, __b);
    case "schema.errorDetailedParsingError":
      if (__b._name !== "schema.errorDetailedParsingError") return false;
      return compareErrorDetailedParsingError(__a, __b);
    case "schema.errorParsingError":
      if (__b._name !== "schema.errorParsingError") return false;
      return compareErrorParsingError(__a, __b);
  }
}
export interface GenerateFilesInputParams {
  contents: string;
}
export function GenerateFiles(params: GenerateFilesInputParams): GenerateFiles {
  return {
    _name: "schema.GenerateFiles",
    contents: params["contents"],
  };
}
export function encodeGenerateFiles(s: ISerializer, value: GenerateFiles) {
  s.writeInt32(1800459719);
  /**
   * encoding param: contents
   */
  const __pv0 = value["contents"];
  s.writeString(__pv0);
}
export function decodeGenerateFiles(__d: IDeserializer): GenerateFiles | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== 1800459719) return null;
  let contents: string;
  /**
   * decoding param: contents
   */
  contents = __d.readString();
  return {
    _name: "schema.GenerateFiles",
    contents,
  };
}
export interface GenerateFiles extends IRequest<generatedFiles> {
  _name: "schema.GenerateFiles";
  contents: string;
}
export function defaultGenerateFiles(
  params: Partial<GenerateFilesInputParams> = {}
): GenerateFiles {
  return GenerateFiles({
    contents: "",
    ...params,
  });
}
export function compareGenerateFiles(__a: GenerateFiles, __b: GenerateFiles) {
  return (
    /**
     * compare parameter contents
     */
    __a["contents"] === __b["contents"]
  );
}
export function updateGenerateFiles(
  value: GenerateFiles,
  changes: Partial<GenerateFilesInputParams>
) {
  if (typeof changes["contents"] !== "undefined") {
    if (!(changes["contents"] === value["contents"])) {
      value = GenerateFiles({
        ...value,
        contents: changes["contents"],
      });
    }
  }
  return value;
}
export type Error =
  | errorInternalServerError
  | errorDetailedParsingError
  | errorParsingError;
export function encodeErrorTrait(s: ISerializer, value: Error) {
  switch (value._name) {
    case "schema.errorInternalServerError":
      encodeErrorInternalServerError(s, value);
      break;
    case "schema.errorDetailedParsingError":
      encodeErrorDetailedParsingError(s, value);
      break;
    case "schema.errorParsingError":
      encodeErrorParsingError(s, value);
      break;
  }
}
export function decodeErrorTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value:
    | errorInternalServerError
    | errorDetailedParsingError
    | errorParsingError;
  switch (__id) {
    case 1951666228: {
      const tmp = decodeErrorInternalServerError(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    case -387976743: {
      const tmp = decodeErrorDetailedParsingError(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    case -629796699: {
      const tmp = decodeErrorParsingError(__d);
      if (tmp === null) return null;
      value = tmp;
      break;
    }
    default:
      return null;
  }
  return value;
}
export function defaultErrorTrait() {
  return defaultErrorInternalServerError();
}
export function compareErrorTrait(__a: Error, __b: Error) {
  switch (__a._name) {
    case "schema.errorInternalServerError":
      if (__b._name !== "schema.errorInternalServerError") return false;
      return compareErrorInternalServerError(__a, __b);
    case "schema.errorDetailedParsingError":
      if (__b._name !== "schema.errorDetailedParsingError") return false;
      return compareErrorDetailedParsingError(__a, __b);
    case "schema.errorParsingError":
      if (__b._name !== "schema.errorParsingError") return false;
      return compareErrorParsingError(__a, __b);
  }
}
export interface errorInternalServerErrorInputParams {}
export function errorInternalServerError(
  _: errorInternalServerErrorInputParams = {}
): errorInternalServerError {
  return {
    _name: "schema.errorInternalServerError",
  };
}
export function encodeErrorInternalServerError(
  s: ISerializer,
  _: errorInternalServerError
) {
  s.writeInt32(1951666228);
}
export function decodeErrorInternalServerError(
  __d: IDeserializer
): errorInternalServerError | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== 1951666228) return null;
  return {
    _name: "schema.errorInternalServerError",
  };
}
export interface errorInternalServerError {
  _name: "schema.errorInternalServerError";
}
export function defaultErrorInternalServerError(
  params: Partial<errorInternalServerErrorInputParams> = {}
): errorInternalServerError {
  return errorInternalServerError({
    ...params,
  });
}
export function compareErrorInternalServerError(
  __a: errorInternalServerError,
  __b: errorInternalServerError
) {
  return true;
}
export function updateErrorInternalServerError(
  value: errorInternalServerError,
  _: Partial<errorInternalServerErrorInputParams>
) {
  return value;
}
export interface errorDetailedParsingErrorInputParams {
  lineNumber: number;
}
export function errorDetailedParsingError(
  params: errorDetailedParsingErrorInputParams
): errorDetailedParsingError {
  return {
    _name: "schema.errorDetailedParsingError",
    lineNumber: params["lineNumber"],
  };
}
export function encodeErrorDetailedParsingError(
  s: ISerializer,
  value: errorDetailedParsingError
) {
  s.writeInt32(-387976743);
  /**
   * encoding param: lineNumber
   */
  const __pv0 = value["lineNumber"];
  s.writeInt32(__pv0);
}
export function decodeErrorDetailedParsingError(
  __d: IDeserializer
): errorDetailedParsingError | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -387976743) return null;
  let lineNumber: number;
  /**
   * decoding param: lineNumber
   */
  lineNumber = __d.readInt32();
  return {
    _name: "schema.errorDetailedParsingError",
    lineNumber,
  };
}
export interface errorDetailedParsingError {
  _name: "schema.errorDetailedParsingError";
  lineNumber: number;
}
export function defaultErrorDetailedParsingError(
  params: Partial<errorDetailedParsingErrorInputParams> = {}
): errorDetailedParsingError {
  return errorDetailedParsingError({
    lineNumber: 0,
    ...params,
  });
}
export function compareErrorDetailedParsingError(
  __a: errorDetailedParsingError,
  __b: errorDetailedParsingError
) {
  return (
    /**
     * compare parameter lineNumber
     */
    __a["lineNumber"] === __b["lineNumber"]
  );
}
export function updateErrorDetailedParsingError(
  value: errorDetailedParsingError,
  changes: Partial<errorDetailedParsingErrorInputParams>
) {
  if (typeof changes["lineNumber"] !== "undefined") {
    if (!(changes["lineNumber"] === value["lineNumber"])) {
      value = errorDetailedParsingError({
        ...value,
        lineNumber: changes["lineNumber"],
      });
    }
  }
  return value;
}
export interface errorParsingErrorInputParams {}
export function errorParsingError(
  _: errorParsingErrorInputParams = {}
): errorParsingError {
  return {
    _name: "schema.errorParsingError",
  };
}
export function encodeErrorParsingError(s: ISerializer, _: errorParsingError) {
  s.writeInt32(-629796699);
}
export function decodeErrorParsingError(
  __d: IDeserializer
): errorParsingError | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -629796699) return null;
  return {
    _name: "schema.errorParsingError",
  };
}
export interface errorParsingError {
  _name: "schema.errorParsingError";
}
export function defaultErrorParsingError(
  params: Partial<errorParsingErrorInputParams> = {}
): errorParsingError {
  return errorParsingError({
    ...params,
  });
}
export function compareErrorParsingError(
  __a: errorParsingError,
  __b: errorParsingError
) {
  return true;
}
export function updateErrorParsingError(
  value: errorParsingError,
  _: Partial<errorParsingErrorInputParams>
) {
  return value;
}
export interface messageRequestInputParams {
  requestId: number;
  request: Request;
}
export function messageRequest(
  params: messageRequestInputParams
): messageRequest {
  return {
    _name: "schema.messageRequest",
    requestId: params["requestId"],
    request: params["request"],
  };
}
export function encodeMessageRequest(s: ISerializer, value: messageRequest) {
  s.writeInt32(871459121);
  /**
   * encoding param: requestId
   */
  const __pv0 = value["requestId"];
  s.writeInt32(__pv0);
  /**
   * encoding param: request
   */
  const __pv1 = value["request"];
  encodeRequestTrait(s, __pv1);
}
export function decodeMessageRequest(
  __d: IDeserializer
): messageRequest | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== 871459121) return null;
  let requestId: number;
  let request: Request;
  /**
   * decoding param: requestId
   */
  requestId = __d.readInt32();
  /**
   * decoding param: request
   */
  const __tmp1 = decodeRequestTrait(__d);
  if (__tmp1 === null) return null;
  request = __tmp1;
  return {
    _name: "schema.messageRequest",
    requestId,
    request,
  };
}
export interface messageRequest {
  _name: "schema.messageRequest";
  requestId: number;
  request: Request;
}
export function defaultMessageRequest(
  params: Partial<messageRequestInputParams> = {}
): messageRequest {
  return messageRequest({
    requestId: 0,
    request: defaultRequestTrait(),
    ...params,
  });
}
export function compareMessageRequest(
  __a: messageRequest,
  __b: messageRequest
) {
  return (
    /**
     * compare parameter requestId
     */
    __a["requestId"] === __b["requestId"] &&
    /**
     * compare parameter request
     */
    compareRequestTrait(__a["request"], __b["request"])
  );
}
export function updateMessageRequest(
  value: messageRequest,
  changes: Partial<messageRequestInputParams>
) {
  if (typeof changes["requestId"] !== "undefined") {
    if (!(changes["requestId"] === value["requestId"])) {
      value = messageRequest({
        ...value,
        requestId: changes["requestId"],
      });
    }
  }
  if (typeof changes["request"] !== "undefined") {
    if (!compareRequestTrait(changes["request"], value["request"])) {
      value = messageRequest({
        ...value,
        request: changes["request"],
      });
    }
  }
  return value;
}
export interface messageResponseInputParams {
  requestId: number;
  result: Result;
}
export function messageResponse(
  params: messageResponseInputParams
): messageResponse {
  return {
    _name: "schema.messageResponse",
    requestId: params["requestId"],
    result: params["result"],
  };
}
export function encodeMessageResponse(s: ISerializer, value: messageResponse) {
  s.writeInt32(-1309406384);
  /**
   * encoding param: requestId
   */
  const __pv0 = value["requestId"];
  s.writeInt32(__pv0);
  /**
   * encoding param: result
   */
  const __pv1 = value["result"];
  encodeResultTrait(s, __pv1);
}
export function decodeMessageResponse(
  __d: IDeserializer
): messageResponse | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if (__id !== -1309406384) return null;
  let requestId: number;
  let result: Result;
  /**
   * decoding param: requestId
   */
  requestId = __d.readInt32();
  /**
   * decoding param: result
   */
  const __tmp1 = decodeResultTrait(__d);
  if (__tmp1 === null) return null;
  result = __tmp1;
  return {
    _name: "schema.messageResponse",
    requestId,
    result,
  };
}
export interface messageResponse {
  _name: "schema.messageResponse";
  requestId: number;
  result: Result;
}
export function defaultMessageResponse(
  params: Partial<messageResponseInputParams> = {}
): messageResponse {
  return messageResponse({
    requestId: 0,
    result: defaultResultTrait(),
    ...params,
  });
}
export function compareMessageResponse(
  __a: messageResponse,
  __b: messageResponse
) {
  return (
    /**
     * compare parameter requestId
     */
    __a["requestId"] === __b["requestId"] &&
    /**
     * compare parameter result
     */
    compareResultTrait(__a["result"], __b["result"])
  );
}
export function updateMessageResponse(
  value: messageResponse,
  changes: Partial<messageResponseInputParams>
) {
  if (typeof changes["requestId"] !== "undefined") {
    if (!(changes["requestId"] === value["requestId"])) {
      value = messageResponse({
        ...value,
        requestId: changes["requestId"],
      });
    }
  }
  if (typeof changes["result"] !== "undefined") {
    if (!compareResultTrait(changes["result"], value["result"])) {
      value = messageResponse({
        ...value,
        result: changes["result"],
      });
    }
  }
  return value;
}

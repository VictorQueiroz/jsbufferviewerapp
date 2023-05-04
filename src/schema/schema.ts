import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {IRequest} from "./__types__";
export interface generatedFileInputParams {
    path: string;
    contents: string;
}
export function generatedFile(params: generatedFileInputParams): generatedFile {
    return {
        _name: 'schema.generatedFile',
        ...params
    };
}
export function encodeGeneratedFile(s: ISerializer, value: generatedFile) {
    s.writeInt32(147338165);
    /**
     * encoding param: path
     */
    const __pv0 = value['path'];
    s.writeString(__pv0);
    /**
     * encoding param: contents
     */
    const __pv1 = value['contents'];
    s.writeString(__pv1);
}
export function decodeGeneratedFile(__d: IDeserializer): generatedFile | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 147338165) return null;
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
        _name: 'schema.generatedFile',
        path,
        contents
    };
}
export interface generatedFile  {
    _name: 'schema.generatedFile';
    path: string;
    contents: string;
}
export function generatedFileDefault(params: Partial<generatedFileInputParams> = {}): generatedFile {
    return generatedFile({
        path: "",
        contents: "",
        ...params
    });
}
export interface generatedFilesInputParams {
    files: ReadonlyArray<generatedFile>;
}
export function generatedFiles(params: generatedFilesInputParams): generatedFiles {
    return {
        _name: 'schema.generatedFiles',
        ...params
    };
}
export function encodeGeneratedFiles(s: ISerializer, value: generatedFiles) {
    s.writeInt32(-1609744325);
    /**
     * encoding param: files
     */
    const __pv0 = value['files'];
    const __l0 = __pv0.length;
    s.writeUint32(__l0);
    for(let __i0 = 0; __i0 < __l0; __i0++) {
        const __v__i0 = __pv0[__i0];
        encodeGeneratedFile(s,__v__i0);
    }
}
export function decodeGeneratedFiles(__d: IDeserializer): generatedFiles | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1609744325) return null;
    let files: Array<generatedFile>;
    /**
     * decoding param: files
     */
    {
        const iindex0 = __d.readUint32();
        const oindex0 = new Array(iindex0);
        files = oindex0;
        for(let index0 = 0; index0 < iindex0; index0++) {
            const __tmp1 = decodeGeneratedFile(__d);
            if(__tmp1 === null) return null;
            oindex0[index0] = __tmp1;
        }
    }
    return {
        _name: 'schema.generatedFiles',
        files
    };
}
export interface generatedFiles  {
    _name: 'schema.generatedFiles';
    files: ReadonlyArray<generatedFile>;
}
export function generatedFilesDefault(params: Partial<generatedFilesInputParams> = {}): generatedFiles {
    return generatedFiles({
        files: [],
        ...params
    });
}
export type Request = GenerateFiles;
export function encodeRequestTrait(s: ISerializer,value: Request) {
    switch(value._name) {
        case 'schema.GenerateFiles':
            encodeGenerateFiles(s,value);
            break;
    }
}
export function decodeRequestTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: GenerateFiles;
    switch(__id) {
        case -616859713: {
            const tmp = decodeGenerateFiles(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function RequestDefault() {
    return GenerateFilesDefault();
}
export type Result = generatedFiles | errorInternalServerError | errorDetailedParsingError | errorParsingError;
export function encodeResultTrait(s: ISerializer,value: Result) {
    switch(value._name) {
        case 'schema.generatedFiles':
            encodeGeneratedFiles(s,value);
            break;
        case 'schema.errorInternalServerError':
            encodeErrorInternalServerError(s,value);
            break;
        case 'schema.errorDetailedParsingError':
            encodeErrorDetailedParsingError(s,value);
            break;
        case 'schema.errorParsingError':
            encodeErrorParsingError(s,value);
            break;
    }
}
export function decodeResultTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: generatedFiles | errorInternalServerError | errorDetailedParsingError | errorParsingError;
    switch(__id) {
        case -1609744325: {
            const tmp = decodeGeneratedFiles(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 1176202453: {
            const tmp = decodeErrorInternalServerError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 1786452860: {
            const tmp = decodeErrorDetailedParsingError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -446967748: {
            const tmp = decodeErrorParsingError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function ResultDefault() {
    return generatedFilesDefault();
}
export interface GenerateFilesInputParams {
    contents: string;
}
export function GenerateFiles(params: GenerateFilesInputParams): GenerateFiles {
    return {
        _name: 'schema.GenerateFiles',
        ...params
    };
}
export function encodeGenerateFiles(s: ISerializer, value: GenerateFiles) {
    s.writeInt32(-616859713);
    /**
     * encoding param: contents
     */
    const __pv0 = value['contents'];
    s.writeString(__pv0);
}
export function decodeGenerateFiles(__d: IDeserializer): GenerateFiles | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -616859713) return null;
    let contents: string;
    /**
     * decoding param: contents
     */
    contents = __d.readString();
    return {
        _name: 'schema.GenerateFiles',
        contents
    };
}
export interface GenerateFiles extends IRequest<generatedFiles> {
    _name: 'schema.GenerateFiles';
    contents: string;
}
export function GenerateFilesDefault(params: Partial<GenerateFilesInputParams> = {}): GenerateFiles {
    return GenerateFiles({
        contents: "",
        ...params
    });
}
export type Error = errorInternalServerError | errorDetailedParsingError | errorParsingError;
export function encodeErrorTrait(s: ISerializer,value: Error) {
    switch(value._name) {
        case 'schema.errorInternalServerError':
            encodeErrorInternalServerError(s,value);
            break;
        case 'schema.errorDetailedParsingError':
            encodeErrorDetailedParsingError(s,value);
            break;
        case 'schema.errorParsingError':
            encodeErrorParsingError(s,value);
            break;
    }
}
export function decodeErrorTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: errorInternalServerError | errorDetailedParsingError | errorParsingError;
    switch(__id) {
        case 1176202453: {
            const tmp = decodeErrorInternalServerError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 1786452860: {
            const tmp = decodeErrorDetailedParsingError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -446967748: {
            const tmp = decodeErrorParsingError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function ErrorDefault() {
    return errorInternalServerErrorDefault();
}
export interface errorInternalServerErrorInputParams {
}
export function errorInternalServerError(params: errorInternalServerErrorInputParams = {}): errorInternalServerError {
    return {
        _name: 'schema.errorInternalServerError',
        ...params
    };
}
export function encodeErrorInternalServerError(s: ISerializer, _: errorInternalServerError) {
    s.writeInt32(1176202453);
}
export function decodeErrorInternalServerError(__d: IDeserializer): errorInternalServerError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1176202453) return null;
    return {
        _name: 'schema.errorInternalServerError',
    };
}
export interface errorInternalServerError  {
    _name: 'schema.errorInternalServerError';
}
export function errorInternalServerErrorDefault(params: Partial<errorInternalServerErrorInputParams> = {}): errorInternalServerError {
    return errorInternalServerError({
        ...params
    });
}
export interface errorDetailedParsingErrorInputParams {
    lineNumber: number;
}
export function errorDetailedParsingError(params: errorDetailedParsingErrorInputParams): errorDetailedParsingError {
    return {
        _name: 'schema.errorDetailedParsingError',
        ...params
    };
}
export function encodeErrorDetailedParsingError(s: ISerializer, value: errorDetailedParsingError) {
    s.writeInt32(1786452860);
    /**
     * encoding param: lineNumber
     */
    const __pv0 = value['lineNumber'];
    s.writeInt32(__pv0);
}
export function decodeErrorDetailedParsingError(__d: IDeserializer): errorDetailedParsingError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1786452860) return null;
    let lineNumber: number;
    /**
     * decoding param: lineNumber
     */
    lineNumber = __d.readInt32();
    return {
        _name: 'schema.errorDetailedParsingError',
        lineNumber
    };
}
export interface errorDetailedParsingError  {
    _name: 'schema.errorDetailedParsingError';
    lineNumber: number;
}
export function errorDetailedParsingErrorDefault(params: Partial<errorDetailedParsingErrorInputParams> = {}): errorDetailedParsingError {
    return errorDetailedParsingError({
        lineNumber: 0,
        ...params
    });
}
export interface errorParsingErrorInputParams {
}
export function errorParsingError(params: errorParsingErrorInputParams = {}): errorParsingError {
    return {
        _name: 'schema.errorParsingError',
        ...params
    };
}
export function encodeErrorParsingError(s: ISerializer, _: errorParsingError) {
    s.writeInt32(-446967748);
}
export function decodeErrorParsingError(__d: IDeserializer): errorParsingError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -446967748) return null;
    return {
        _name: 'schema.errorParsingError',
    };
}
export interface errorParsingError  {
    _name: 'schema.errorParsingError';
}
export function errorParsingErrorDefault(params: Partial<errorParsingErrorInputParams> = {}): errorParsingError {
    return errorParsingError({
        ...params
    });
}
export interface messageRequestInputParams {
    requestId: number;
    request: Request;
}
export function messageRequest(params: messageRequestInputParams): messageRequest {
    return {
        _name: 'schema.messageRequest',
        ...params
    };
}
export function encodeMessageRequest(s: ISerializer, value: messageRequest) {
    s.writeInt32(-1960323619);
    /**
     * encoding param: requestId
     */
    const __pv0 = value['requestId'];
    s.writeInt32(__pv0);
    /**
     * encoding param: request
     */
    const __pv1 = value['request'];
    encodeRequestTrait(s,__pv1);
}
export function decodeMessageRequest(__d: IDeserializer): messageRequest | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1960323619) return null;
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
    if(__tmp1 === null) return null;
    request = __tmp1;
    return {
        _name: 'schema.messageRequest',
        requestId,
        request
    };
}
export interface messageRequest  {
    _name: 'schema.messageRequest';
    requestId: number;
    request: Request;
}
export function messageRequestDefault(params: Partial<messageRequestInputParams> = {}): messageRequest {
    return messageRequest({
        requestId: 0,
        request: RequestDefault(),
        ...params
    });
}
export interface messageResponseInputParams {
    requestId: number;
    result: Result;
}
export function messageResponse(params: messageResponseInputParams): messageResponse {
    return {
        _name: 'schema.messageResponse',
        ...params
    };
}
export function encodeMessageResponse(s: ISerializer, value: messageResponse) {
    s.writeInt32(-1508271331);
    /**
     * encoding param: requestId
     */
    const __pv0 = value['requestId'];
    s.writeInt32(__pv0);
    /**
     * encoding param: result
     */
    const __pv1 = value['result'];
    encodeResultTrait(s,__pv1);
}
export function decodeMessageResponse(__d: IDeserializer): messageResponse | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1508271331) return null;
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
    if(__tmp1 === null) return null;
    result = __tmp1;
    return {
        _name: 'schema.messageResponse',
        requestId,
        result
    };
}
export interface messageResponse  {
    _name: 'schema.messageResponse';
    requestId: number;
    result: Result;
}
export function messageResponseDefault(params: Partial<messageResponseInputParams> = {}): messageResponse {
    return messageResponse({
        requestId: 0,
        result: ResultDefault(),
        ...params
    });
}

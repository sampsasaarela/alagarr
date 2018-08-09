import { InterfaceResponseData } from '../types';
export default function makeResponseObject(body: string, statusCode?: number, { headers, ...options }?: {
    headers?: {} | undefined;
}, contentType?: string): InterfaceResponseData;

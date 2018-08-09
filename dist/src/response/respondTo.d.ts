import { InterfaceRequest, InterfaceRespondToFormat, InterfaceResponseData, InterfaceResponseOptions } from '../types';
export default function respondTo(request: InterfaceRequest, formats: InterfaceRespondToFormat, statusCode?: number, options?: InterfaceResponseOptions): InterfaceResponseData;

import { InterfaceRequest } from '../../types';
export interface InterfaceCookie {
    readonly [key: string]: string;
}
export default function cookies(request: InterfaceRequest): InterfaceRequest;

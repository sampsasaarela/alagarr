import ClientError from './errors/client-error';
import ServerError from './errors/server-error';
import { Alagarr, HandlerFunction, InterfaceAlagarrOptions, InterfaceRequest, InterfaceResponse } from './types';
export { Alagarr, HandlerFunction, InterfaceAlagarrOptions, InterfaceRequest, InterfaceResponse, ClientError, ServerError, };
export default function alagarr(handler?: HandlerFunction, options?: InterfaceAlagarrOptions): Alagarr;

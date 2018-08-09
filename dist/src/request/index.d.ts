import * as AWSLambda from 'aws-lambda';
import { InterfaceAlagarrOptions, InterfaceRequest } from '../types';
declare const _default: (event: AWSLambda.APIGatewayProxyEvent, context: AWSLambda.Context, options?: InterfaceAlagarrOptions) => Promise<InterfaceRequest>;
export default _default;

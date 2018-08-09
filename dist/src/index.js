var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import defaultErrorHandler from './error-handler';
import ClientError from './errors/client-error';
import ServerError from './errors/server-error';
import makeRequest from './request';
import makeResponse from './response';
const DEFAULT_OPTIONS = {
    cspPolicies: [],
    enableCompression: true,
    enableContentLength: true,
    enableCspHeaders: true,
    enableETagHeader: true,
    enableEnforcedHeaders: true,
    enableLogger: true,
    enableStrictTransportSecurity: true,
    errorHandler: defaultErrorHandler,
    requestMiddleware: [],
    responseMiddleware: [],
};
const noopHandler = (_, _1) => {
    throw new ServerError('Misconfiguration in Alagarr setup. No handler function was provided.');
};
export { ClientError, ServerError, };
export default function alagarr(handler = noopHandler, options = DEFAULT_OPTIONS) {
    return function handlerWrapper(event, context, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = Object.assign({}, DEFAULT_OPTIONS, options);
            const request = yield makeRequest(event, context, mergedOptions);
            const response = yield makeResponse(request, callback, mergedOptions);
            try {
                return yield handler(request, response, context);
            }
            catch (error) {
                const errorHandler = typeof mergedOptions.errorHandler === 'function'
                    ? mergedOptions.errorHandler
                    : defaultErrorHandler;
                try {
                    return yield errorHandler(request, response, error);
                }
                catch (error) {
                    console.error('There was an error in the error handler provided to Alagaar', error, errorHandler.toString());
                    return defaultErrorHandler(request, response, error);
                }
            }
        });
    };
}

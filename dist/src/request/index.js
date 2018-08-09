var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import applyMiddleware from '../utils/apply-middleware';
import base64Body from './middleware/base64-body';
import cookies from './middleware/cookies';
import hostname from './middleware/hostname';
import jsonBody from './middleware/json-body';
import meta from './middleware/meta';
import normalizeHeaders from './middleware/normalize-headers';
import normalizeProgrammingModel from './middleware/normalize-programming-model';
import timestamp from './middleware/timestamp';
import urlEncodedBody from './middleware/url-encoded-body';
export default (event, context, options = {}) => __awaiter(this, void 0, void 0, function* () {
    return applyMiddleware([
        timestamp,
        normalizeProgrammingModel,
        normalizeHeaders,
        base64Body,
        cookies,
        urlEncodedBody,
        jsonBody,
        hostname,
        meta,
        ...(options.requestMiddleware || []),
    ], Object.freeze(Object.assign({}, event, { context })), options);
});

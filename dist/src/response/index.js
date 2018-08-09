var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import applyMiddleware from '../utils/apply-middleware';
import compress from './middleware/compress';
import contentLength from './middleware/content-length';
import csp from './middleware/csp';
import enforcedHeaders from './middleware/enforced-headers';
import etag from './middleware/etag';
import log from './middleware/log';
import html from './html';
import json from './json';
import redirect from './redirect';
import respondTo from './respondTo';
import text from './text';
const middlewareMap = {
    enableCompression: compress,
    enableContentLength: contentLength,
    enableCspHeaders: csp,
    enableETagHeader: etag,
    enableEnforcedHeaders: enforcedHeaders,
};
export default (request, callback, options) => __awaiter(this, void 0, void 0, function* () {
    return [text, html, json, redirect, respondTo].reduce((methods, method) => (Object.assign({}, methods, { [method.name]: (...args) => __awaiter(this, void 0, void 0, function* () {
            return callback(null, yield applyMiddleware([...Object.keys(middlewareMap)].reduce((middlewareList, middleware) => options[middleware]
                ? [...middlewareList, middlewareMap[middleware]]
                : middlewareList, [
                ...(options.responseMiddleware || []),
                ...(options.enableLogger ? [log] : []),
            ]), method(request, ...args), request, options));
        }) })), { raw: callback });
});

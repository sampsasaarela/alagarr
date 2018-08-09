var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import makeResponse from './';
const testRequest = { headers: {} };
const testHtmlBody = '<html></html>';
const testOptions = {
    headers: { 'x-foo-bar': 'foobar', 'Content-Type': 'vnd.foobar/foobar' },
};
const testStatusCode = 123;
it('can override headers', () => __awaiter(this, void 0, void 0, function* () {
    const response = yield makeResponse(testRequest, (error, { body, statusCode, headers }) => {
        expect(error).toBeNull();
        expect(statusCode).toBe(testStatusCode);
        expect(headers['x-foo-bar']).toBe(testOptions.headers['x-foo-bar']);
        expect(headers['Content-Type']).toBe(testOptions.headers['Content-Type']);
        expect(body).toBe(testHtmlBody);
    }, {});
    response.html(testHtmlBody, testStatusCode, testOptions);
}));
it('Content-Type is HTML', () => __awaiter(this, void 0, void 0, function* () {
    const response = yield makeResponse(testRequest, (error, { body, statusCode, headers }) => {
        expect(error).toBeNull();
        expect(statusCode).toBe(testStatusCode);
        expect(headers['content-type']).toBe('text/html');
        expect(typeof body).toBe('string');
        expect(body).toBe(testHtmlBody);
    }, {});
    response.html(testHtmlBody, testStatusCode);
}));

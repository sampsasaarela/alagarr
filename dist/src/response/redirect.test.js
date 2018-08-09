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
it('Redirect status code correct with Location header', () => __awaiter(this, void 0, void 0, function* () {
    const redirectLocation = 'test://foobar.com';
    const response = yield makeResponse(testRequest, (error, { statusCode, headers }) => {
        expect(error).toBeNull();
        expect(statusCode).toBe(301);
        expect(headers.location).toBe(redirectLocation);
    }, {});
    response.redirect(redirectLocation, 301);
}));

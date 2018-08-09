var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import makeResponse from './';
import json from './json';
const testRequest = { headers: {} };
const testJsonBody = { foo: 'bar' };
const testStatusCode = 123;
it('Content-Type is JSON', () => __awaiter(this, void 0, void 0, function* () {
    const response = yield makeResponse(testRequest, (error, { body, statusCode, headers }) => {
        expect(error).toBeNull();
        expect(statusCode).toBe(testStatusCode);
        expect(headers['content-type']).toBe('application/json');
        expect(typeof body).toBe('string');
        expect(body).toBe(JSON.stringify(testJsonBody));
    }, {});
    response.json(testJsonBody, testStatusCode);
}));
it('should not stringify when body is already stringified JSON', () => __awaiter(this, void 0, void 0, function* () {
    expect(json({}, 'foobar').body).toEqual('"foobar"');
    expect(json({}, JSON.stringify(testJsonBody)).body).toEqual(JSON.stringify(testJsonBody));
}));

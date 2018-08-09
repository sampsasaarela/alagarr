var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EnumDefaultRespondToFormat } from '../types';
import makeResponse from './';
const testRespondToFormats = {
    default: EnumDefaultRespondToFormat.json,
    html: '<html />',
    json: { foo: 'bar' },
};
const testStatusCode = 123;
it('respondTo picks correct format based on request Accept header', () => __awaiter(this, void 0, void 0, function* () {
    const htmlResponse = yield makeResponse({
        headers: {
            accept: 'text/html,application/json',
        },
    }, (error, { body, statusCode, headers }) => {
        expect(error).toBeNull();
        expect(statusCode).toBe(testStatusCode);
        expect(headers['content-type']).toBe('text/html');
        expect(typeof body).toBe('string');
        expect(body).toBe(testRespondToFormats.html);
    }, {});
    htmlResponse.respondTo(testRespondToFormats, testStatusCode);
    const jsonResponse = yield makeResponse({
        headers: {
            accept: 'application/json,text/html',
        },
    }, (error, { body, statusCode, headers }) => {
        expect(error).toBeNull();
        expect(statusCode).toBe(testStatusCode);
        expect(headers['content-type']).toBe('application/json');
        expect(typeof body).toBe('string');
        expect(body).toBe(JSON.stringify(testRespondToFormats.json));
    }, {});
    jsonResponse.respondTo(testRespondToFormats, testStatusCode);
}));
it('respondTo allows setting custom headers via options', () => __awaiter(this, void 0, void 0, function* () {
    const testCustomOptions = {
        headers: {
            foo: 'bar-1234',
        },
    };
    const response = yield makeResponse({
        headers: {
            accept: 'foo/bar,bar/foo',
        },
    }, (error, { body, statusCode, headers }) => {
        expect(error).toBeNull();
        expect(statusCode).toBe(testStatusCode);
        expect(headers['content-type']).toBe('application/json');
        expect(headers.foo).toBe(testCustomOptions.headers.foo);
        expect(typeof body).toBe('string');
        expect(body).toBe(JSON.stringify(testRespondToFormats.json));
    }, {});
    response.respondTo(testRespondToFormats, testStatusCode, testCustomOptions);
}));
it('respondTo correctly falls back on a default format', () => __awaiter(this, void 0, void 0, function* () {
    const response = yield makeResponse({
        headers: {
            accept: 'foo/bar,bar/foo',
        },
    }, (error, { body, statusCode, headers }) => {
        expect(error).toBeNull();
        expect(statusCode).toBe(testStatusCode);
        expect(headers['content-type']).toBe('application/json');
        expect(typeof body).toBe('string');
        expect(body).toBe(JSON.stringify(testRespondToFormats.json));
    }, {});
    response.respondTo(testRespondToFormats, testStatusCode);
}));

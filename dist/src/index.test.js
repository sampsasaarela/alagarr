var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { get as getRequestFixture, mockContext, } from '../test/fixtures/requests';
import alagarr from './index';
const testRequest = Object.assign({}, getRequestFixture, { headers: {} });
function handlerPromise(handler, event = testRequest, context = mockContext) {
    return new Promise((resolve, reject) => handler(event, context, (error, result) => (error ? reject(error) : resolve(result))));
}
describe('Alagarr NPM Package', () => {
    test('should have zero non-development dependencies', () => {
        const packageJson = require('../package.json');
        expect(Object.keys(packageJson.dependencies).length).toBe(0);
    });
});
describe('Alagarr', () => {
    test('can respond with JSON', () => __awaiter(this, void 0, void 0, function* () {
        const handler = alagarr((_, response) => response.json({ foo: 'bar' }, 201), {});
        const result = yield handlerPromise(handler);
        expect(typeof result.body).toBe('string');
        expect(result.body).toBe('{"foo":"bar"}');
        expect(result.statusCode).toBe(201);
        expect(result.headers['content-type']).toBe('application/json');
    }));
    test('@TODO try-catch error response, errorhandle works', () => __awaiter(this, void 0, void 0, function* () {
        expect('@TODO').toBe('done');
    }));
});

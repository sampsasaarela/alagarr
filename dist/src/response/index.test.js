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
it('can access underlying callback method directly', () => __awaiter(this, void 0, void 0, function* () {
    const testResult = { foo: 'bar' };
    const response = yield makeResponse(testRequest, (error, result) => {
        expect(error).toBeInstanceOf(Error);
        expect(result).toEqual(testResult);
    }, {});
    response.raw(new Error('foobar'), testResult);
}));

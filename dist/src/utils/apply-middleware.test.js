var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import applyMiddleware from './apply-middleware';
it('middleware is applied correctly', () => __awaiter(this, void 0, void 0, function* () {
    const initialData = { foo: 'bar', sum: 0 };
    const testMiddleware = (object, one, two, three) => (Object.assign({}, object, { one,
        two,
        three, sum: object.sum + one + two + three }));
    const result = yield applyMiddleware([testMiddleware, testMiddleware, testMiddleware], initialData, 1, 2, 3);
    expect(result.sum).toBe(18);
    expect(result.foo).toBe('bar');
}));

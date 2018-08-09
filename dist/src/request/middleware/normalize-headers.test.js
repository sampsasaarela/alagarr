import { get as getRequestFixture } from '../../../test/fixtures/requests';
import normalize from './normalize-headers';
const testRequest = Object.assign({}, getRequestFixture, { body: 'foobar', headers: { 'X-Foo-Bar': 'foobar' } });
describe('Normalize request headers', () => {
    test('headers to lower-case', () => {
        const expected = Object.assign({}, testRequest, { headers: { 'x-foo-bar': 'foobar' } });
        const normalized = normalize(testRequest);
        expect(normalized).toEqual(expected);
    });
    test('headers can be empty', () => {
        const expected = Object.assign({}, testRequest, { headers: {} });
        const normalized = normalize(Object.assign({}, testRequest, { headers: undefined }));
        expect(normalized).toEqual(expected);
    });
});

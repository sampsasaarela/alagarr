import { get as getRequestFixture } from '../../../test/fixtures/requests';
import cookies from './cookies';
const testRequest = Object.assign({}, getRequestFixture, { headers: {
        cookie: 'PHPSESSID=e61d68c319d12269c6af8cd939298857; REMEMBERME=yah; locale=de_DE',
    } });
describe('Request cookies', () => {
    test('get parsed', () => {
        const expected = Object.assign({}, testRequest, { cookies: {
                PHPSESSID: 'e61d68c319d12269c6af8cd939298857',
                REMEMBERME: 'yah',
                locale: 'de_DE',
            } });
        const request = cookies(testRequest);
        expect(request).toEqual(expected);
    });
    test('header might not exist', () => {
        const expected = Object.assign({}, testRequest, { cookies: {}, headers: {} });
        const request = cookies(Object.assign({}, testRequest, { headers: {} }));
        expect(request).toEqual(expected);
    });
    test('should handle quoted cookie values', () => {
        const testCookieHeader = {
            headers: {
                cookie: 'foo="bar"; foobar=1',
            },
        };
        const expected = Object.assign({}, testRequest, testCookieHeader, { cookies: {
                foo: 'bar',
                foobar: '1',
            } });
        const request = cookies(Object.assign({}, testRequest, testCookieHeader));
        expect(request).toEqual(expected);
    });
    test('should handle empty cookie values', () => {
        const testCookieHeader = {
            headers: {
                cookie: 'foo=bar; foobar=',
            },
        };
        const expected = Object.assign({}, testRequest, testCookieHeader, { cookies: {
                foo: 'bar',
                foobar: '',
            } });
        const request = cookies(Object.assign({}, testRequest, testCookieHeader));
        expect(request).toEqual(expected);
    });
    test('should handle messed up cookie values', () => {
        const testCookieHeader = {
            headers: {
                cookie: 'foo=bar; foobar foofoo; barbar=1; broke=2 yup=',
            },
        };
        const expected = Object.assign({}, testRequest, testCookieHeader, { cookies: {
                barbar: '1',
                broke: '2 yup=',
                foo: 'bar',
            } });
        const request = cookies(Object.assign({}, testRequest, testCookieHeader));
        expect(request).toEqual(expected);
    });
});

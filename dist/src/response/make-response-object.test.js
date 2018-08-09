var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import makeResponseObject from './make-response-object';
const testStatusCode = 123;
it('default statusCode is 200', () => {
    const response = makeResponseObject('foobar');
    expect(response.statusCode).toBe(200);
});
it('can correctly set parameters', () => {
    const _a = makeResponseObject('foobar', testStatusCode, {
        headers: { foofoo: 'barbar' },
        isBase64Encoded: true,
    }), { body, statusCode, headers } = _a, options = __rest(_a, ["body", "statusCode", "headers"]);
    expect(body).toBe('foobar');
    expect(statusCode).toBe(testStatusCode);
    expect(headers.foofoo).toBe('barbar');
    expect(options.isBase64Encoded).toBe(true);
});

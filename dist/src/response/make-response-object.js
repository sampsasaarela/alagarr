var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
export default function makeResponseObject(body, statusCode = 200, _a = {}, contentType) {
    var { headers = {} } = _a, options = __rest(_a, ["headers"]);
    return Object.freeze(Object.assign({ body, headers: Object.assign({ 'content-type': contentType }, headers), statusCode }, options));
}

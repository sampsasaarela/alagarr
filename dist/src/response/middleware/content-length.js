var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
export default function contentLengthHeader(response) {
    const { body, headers } = response, rest = __rest(response, ["body", "headers"]);
    return Object.assign({}, rest, { body, headers: Object.assign({}, headers, { 'content-length': headers['content-length'] || Buffer.byteLength(body) }) });
}

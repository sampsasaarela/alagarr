var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
export default function normalizeHeaders(_a) {
    var { headers = {} } = _a, request = __rest(_a, ["headers"]);
    return Object.assign({}, request, { headers: Object.keys(headers).reduce((normalizedHeaders, key) => {
            const normalizedHeaderKey = key.toLowerCase();
            return request.provider === 'aws' &&
                Reflect.has(normalizedHeaders, normalizedHeaderKey) &&
                normalizedHeaderKey === 'content-type' &&
                headers[key] === 'application/json'
                ? normalizedHeaders
                : Object.assign({}, normalizedHeaders, { [normalizedHeaderKey]: headers[key] });
        }, {}) });
}

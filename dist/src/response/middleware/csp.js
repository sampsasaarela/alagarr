var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
const DEFAULT_POLICIES = {
    'default-src': "'self' https: 'unsafe-inline'",
    'img-src': '* data: blob:',
};
export default function cspHeaders(response, _, options) {
    const { headers = {} } = response, rest = __rest(response, ["headers"]);
    const cspPolicies = Object.assign({}, DEFAULT_POLICIES, options.cspPolicies);
    const cspPolicy = Object.keys(cspPolicies)
        .map((policy) => `${policy} ${cspPolicies[policy]}`)
        .join(';');
    return Object.assign({}, rest, { headers: Object.assign({}, headers, { 'referrer-policy': 'strict-origin-when-cross-origin', 'x-content-type-options': 'nosniff', 'x-xss-protection': '1; mode=block', 'content-security-policy': cspPolicy, 'x-frame-options': {
                "'none'": 'DENY',
                "'self'": 'SAMEORIGIN',
            }[cspPolicies['frame-ancestors']] || undefined }) });
}

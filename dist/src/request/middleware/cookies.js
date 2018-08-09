function parseCookiePair(pair) {
    const indexOfEqualCharacter = pair.indexOf('=');
    const looksLikeKeyValue = indexOfEqualCharacter >= 0;
    const key = looksLikeKeyValue && pair.substr(0, indexOfEqualCharacter).trim();
    const value = looksLikeKeyValue &&
        pair.substr(indexOfEqualCharacter + 1, pair.length).trim();
    const cleanValue = value && '"' === value[0] ? value.slice(1, -1) : value;
    return key ? { [key]: cleanValue ? decodeURIComponent(cleanValue) : '' } : {};
}
function parseCookieHeader(cookieHeader) {
    const pairs = cookieHeader.split(/; */);
    return pairs.reduce((parsedCookies, pair) => (Object.assign({}, parsedCookies, parseCookiePair(pair))), {});
}
export default function cookies(request) {
    return Object.assign({}, request, { cookies: parseCookieHeader((request.headers && request.headers.cookie) || '') });
}

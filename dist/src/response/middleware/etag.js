import * as crypto from 'crypto';
export const EMPTY_ENTITY_TAG = '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
function entitytag(entity) {
    const hash = crypto
        .createHash('sha1')
        .update(entity, 'utf8')
        .digest('base64')
        .substring(0, 27);
    const length = typeof entity === 'string'
        ? Buffer.byteLength(entity, 'utf8')
        : entity.length;
    return '"' + length.toString(16) + '-' + hash + '"';
}
function etag(entity) {
    return entity.length === 0 ? EMPTY_ENTITY_TAG : entitytag(entity);
}
export default function etagHeader(response) {
    return Object.assign({}, response, { headers: Object.assign({}, response.headers, { etag: etag(response.body) }) });
}

const decodeBase64 = (encoded) => {
    const bodyBuffer = Buffer.from(encoded, 'base64');
    return bodyBuffer.toString('utf8');
};
export default function decodeBase64Body(request) {
    return request.isBase64Encoded && typeof request.body === 'string'
        ? Object.assign({}, request, { body: decodeBase64(request.body) }) : request;
}

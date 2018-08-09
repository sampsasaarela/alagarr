const parseJson = (stringified) => {
    try {
        return JSON.parse(stringified);
    }
    catch (_a) {
        return {};
    }
};
export default function parseJsonBody(request) {
    const { headers, body } = request;
    return headers['content-type'] &&
        headers['content-type'].split(';').shift() === 'application/json' &&
        typeof body === 'string'
        ? Object.assign({}, request, { body: parseJson(body) }) : request;
}

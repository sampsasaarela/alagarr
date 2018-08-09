import * as querystring from 'querystring';
export default function parseUrlEncodedBody(request) {
    const { headers, body } = request;
    return headers['content-type'] &&
        headers['content-type'].split(';').shift() ===
            'application/x-www-form-urlencoded' &&
        typeof body === 'string'
        ? Object.assign({}, request, { body: querystring.parse(body) }) : request;
}

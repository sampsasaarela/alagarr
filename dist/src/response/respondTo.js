import html from './html';
import json from './json';
function getBestMatchedFormat(formats, accept) {
    const fallback = formats.default || 'html';
    const acceptFormats = accept &&
        typeof accept === 'string' &&
        accept
            .split(';')[0]
            .split(',')
            .map(type => {
            const mimeParts = type.split('/');
            return mimeParts[mimeParts.length - 1];
        });
    return ((acceptFormats && acceptFormats.find(type => Reflect.has(formats, type))) ||
        fallback);
}
function getBestMatchedResponseHelper(format) {
    switch (format) {
        case 'html':
            return html;
        case 'json':
            return json;
    }
    throw new TypeError(`"${format}" is not a valid Alagarr respondTo() format.`);
}
function getBestMatchedFormatBody(formats, format) {
    switch (format) {
        case 'html':
            return formats.html;
        case 'json':
            return formats.json;
    }
    throw new TypeError(`"${format}" is not a valid Alagarr respondTo() format.`);
}
export default function respondTo(request, formats, statusCode, options) {
    const { headers: { accept } } = request;
    const format = getBestMatchedFormat(formats, accept);
    const responseHelper = getBestMatchedResponseHelper(format);
    const body = getBestMatchedFormatBody(formats, format);
    return responseHelper(request, body, statusCode, options);
}

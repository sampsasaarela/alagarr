import makeResponseObject from './make-response-object';
function stringifyIfNotStringifiedJson(data) {
    const isStringifiedJson = typeof data === 'string' &&
        ['{', '"'].includes(data[0]) &&
        ['}', '"'].includes(data[data.length - 1]);
    return isStringifiedJson ? data : JSON.stringify(data);
}
const json = (_, body, statusCode, options) => makeResponseObject(stringifyIfNotStringifiedJson(body), statusCode, options, 'application/json');
export default json;

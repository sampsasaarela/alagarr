import makeResponseObject from './make-response-object';
const text = (_, body, statusCode, options) => makeResponseObject(body, statusCode, options, 'text/plain');
export default text;

import makeResponseObject from './make-response-object';
const html = (_, body, statusCode, options) => makeResponseObject(body, statusCode, options, 'text/html');
export default html;

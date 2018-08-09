import makeResponseObject from './make-response-object';
const redirect = (_, location, statusCode = 302) => makeResponseObject('', statusCode, {
    headers: {
        location,
    },
});
export default redirect;

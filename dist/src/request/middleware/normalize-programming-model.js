export default function normalizeProgrammingModel(request) {
    return Object.assign({}, request, { method: request.httpMethod || '', provider: 'aws', query: request.queryStringParameters || {}, source: request.requestContext ? 'api-gateway' : request.source });
}

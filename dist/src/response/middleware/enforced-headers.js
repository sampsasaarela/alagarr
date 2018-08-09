export default function enforcedHeaders(response, _, options) {
    return Object.assign({}, response, { headers: Object.assign({}, response.headers, (options.headers ? options.headers : {})) });
}

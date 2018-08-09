export default function setHostname(request) {
    return Object.assign({}, request, { hostname: (request.headers && request.headers.host) || undefined });
}

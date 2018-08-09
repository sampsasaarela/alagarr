export default function addTimestamp(request) {
    return Object.assign({}, request, { timestamp: Date.now() });
}

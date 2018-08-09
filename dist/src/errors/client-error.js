export default class ClientError extends Error {
    constructor(message, name, statusCode = 400) {
        super(String(message));
        this.name = 'ClientError';
        this.statusCode = 400;
        this.name = name || this.name;
        this.statusCode = statusCode;
    }
}

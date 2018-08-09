export default class ServerError extends Error {
    constructor(message, name, statusCode = 500) {
        super(String(message));
        this.name = 'ServerError';
        this.statusCode = 500;
        this.name = name || this.name;
        this.statusCode = statusCode;
    }
}

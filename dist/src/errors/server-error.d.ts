export default class ServerError extends Error {
    readonly name: string;
    readonly statusCode: number;
    constructor(message?: string, name?: string, statusCode?: number);
}

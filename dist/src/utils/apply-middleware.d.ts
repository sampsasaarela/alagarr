export declare type Middleware<T> = (...args: any[]) => T;
export default function applyMiddleware<T>(middlewareList: ReadonlyArray<Middleware<T>>, initialData: T, ...args: any[]): Promise<T>;

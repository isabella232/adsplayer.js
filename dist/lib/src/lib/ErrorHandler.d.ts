import { ErrorCodes } from '../Errors';
export declare class ErrorHandler {
    private logger;
    private eventBus;
    constructor(eventBus: any);
    sendError(code: ErrorCodes, data: object): void;
}

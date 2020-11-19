export declare enum AdEvents {
    TRIGGER_START = "triggerStart",
    TRIGGER_END = "triggerEnd",
    AD_START = "adStart",
    AD_END = "adEnd"
}
export declare class EventBus {
    private registrations;
    private logger;
    constructor();
    addEventListener(type: string, listener: any): void;
    removeEventListener(type: string, listener: any): void;
    removeAllEventListener(): void;
    dispatchEvent(type: string, data?: object): void;
    private getListeners;
}

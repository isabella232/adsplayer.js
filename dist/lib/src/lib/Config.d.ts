/**
* Config utility class for managing configuration parameters.
*/
export declare class Config {
    private static instance;
    private _handleMainPlayerPlayback;
    private _handleClickThrough;
    private _filterTriggersFn;
    static getInstance(): Config;
    constructor();
    handleMainPlayerPlayback: boolean;
    handleClickThrough: boolean;
    filterTriggersFn: Function;
}

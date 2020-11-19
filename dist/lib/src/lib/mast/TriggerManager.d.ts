/**
* The TriggerManager manages the detection of the start and end of a trigger.
* It takes as input a trigger object (as parsed from a MAST file) and tests the start and end conditions
* to detect the activation and revocation of a trigger.
*/
import * as mast from './model/Mast';
export declare class TriggerManager {
    trigger: mast.Trigger;
    startTime: number;
    isSkipped: boolean;
    constructor();
    /**
     * Initializes the TriggerManager.
     * @method init
     * @access public
     * @memberof TriggerManager#
     * @param {Trigger} trigger - the trigger to handle by this manager
     * @param {number} startTime - the playback time before which triggers shall be ignored
     */
    init(trigger: mast.Trigger, startTime?: number): void;
    /**
     * Returns the trigger object managed by this TriggerManager.
     * @method init
     * @access public
     * @memberof TriggerManager#
     * @return {Object} the managed trigger object
     */
    getTrigger(): mast.Trigger;
    /**
     * Evaluates the trigger start conditions.
     * @method checkStartConditions
     * @access public
     * @memberof TriggerManager#
     * @param {Number} video - the main video element
     */
    checkStartConditions(video: HTMLMediaElement): boolean;
    /**
     * Evaluates the trigger end conditions.
     * @method checkEndConditions
     * @access public
     * @memberof TriggerManager#
     * @param {Number} video - the main video element
     */
    checkEndConditions(video: HTMLMediaElement): boolean;
    /**
     * Return true if trigger is skipped since trigger time is anterior to provided stream start time
     * @return true if trigger is skipped since trigger time is anterior to provided stream start time
     */
    getIsSkipped(): boolean;
    private compareValues;
    private evaluateCondition;
    private evaluateConditions;
}
export default TriggerManager;

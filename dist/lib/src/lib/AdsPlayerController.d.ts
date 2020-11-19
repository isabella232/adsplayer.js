import { EventBus } from './EventBus';
export declare class AdsPlayerController {
    private adsPlayerContainer;
    private mainVideo;
    private mast;
    private fileLoaders;
    private triggerManagers;
    private vastPlayerManager;
    private mastParser;
    private vastParser;
    private config;
    private logger;
    private eventBus;
    private errorHandler;
    private onVideoPlayingListener;
    private onVideoTimeupdateListener;
    private onVideoEndedListener;
    private onTriggerEndListener;
    private currentTrigger;
    constructor(eventBus: EventBus);
    /**
     * Initialize the Ads Player Controller.
     * @method init
     * @access public
     * @memberof AdsPlayerController#
     * @param {Object} video - the HTML5 video element used by the main media player
     * @param {Object} adsPlayerContainer - The container to create the HTML5 video/image elements used to play and render the ads media
     */
    init(video: HTMLMediaElement, adsPlayerContainer: HTMLElement): void;
    /**
     * Load/open a MAST file.
     * @method load
     * @access public
     * @memberof AdsPlayerController#
     * @param {string} mastUrl - the MAST file url
     * @param {number} startTime - the playback time before which triggers shall be ignored
     */
    load(url: string, startTime?: number): Promise<boolean>;
    /**
     * Stops and resets the Ads player.
     * @method reset
     * @access public
     * @memberof AdsPlayerController#
     */
    stop(): void;
    reset(): void;
    destroy(): void;
    /**
     * Plays/resumes the playback of the current ad.
     * @method reset
     * @access public
     * @memberof AdsPlayerController#
     */
    play(): void;
    /**
     * Pauses the playback of the current ad.
     * @method reset
     * @access public
     * @memberof AdsPlayerController#
     */
    pause(): void;
    private loadVast;
    private loadTriggerVasts;
    private parseMastFile;
    private onVideoPlaying;
    private onVideoTimeupdate;
    private onVideoEnded;
    private pauseVideo;
    private resumeVideo;
    private onTriggerEnd;
    private playTrigger;
    private activateTrigger;
    private checkTriggersStart;
    private checkTriggersEnd;
    private start;
}
export default AdsPlayerController;

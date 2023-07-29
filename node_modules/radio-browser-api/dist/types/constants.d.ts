/**
 * @public
 */
export declare const StationSearchOrder: {
    readonly name: "name";
    readonly url: "url";
    readonly homepage: "homepage";
    readonly favicon: "favicon";
    readonly tags: "tags";
    readonly country: "country";
    readonly state: "state";
    readonly language: "language";
    readonly votes: "votes";
    readonly codec: "codec";
    readonly bitrate: "bitrate";
    readonly lastCheckOK: "lastCheckOK";
    readonly lastCheckTime: "lastCheckTime";
    readonly clickTimeStamp: "clickTimeStamp";
    readonly clickCount: "clickCount";
    readonly clickTrend: "clickTrend";
    readonly random: "random";
};
/**
 * @public
 */
export declare const StationSearchType: {
    readonly byUuid: "byUuid";
    readonly byName: "byName";
    readonly byNameExact: "byNameExact";
    readonly byCodec: "byCodec";
    readonly byCodexExact: "byCodecExact";
    readonly byCountry: "byCountry";
    readonly byCountryExact: "byCountryExact";
    readonly byCountryCodeExact: "byCountryCodeExact";
    readonly byState: "byState";
    readonly byStateExact: "byStateExact";
    readonly byLanguage: "byLanguage";
    readonly byLanguageExact: "byLanguageExact";
    readonly byTag: "byTag";
    readonly byTagExact: "byTagExact";
};
/**
 * @public
 */
export declare type StationResponse = {
    changeuuid: string;
    stationuuid: string;
    name: string;
    url: string;
    url_resolved: string;
    homepage: string;
    favicon: string;
    tags: string;
    country: string;
    countrycode: string;
    state: string;
    language: string;
    votes: number;
    lastchangetime: string;
    codec: string;
    bitrate: number;
    hls: number;
    lastcheckok: number;
    lastchecktime: string;
    lastlocalchecktime: string;
    lastcheckoktime: string;
    clicktimestamp: string;
    clickcount: number;
    clicktrend: number;
    geo_lat?: number | null;
    geo_long?: number | null;
};
/**
 * @public
 */
export declare type Station = {
    changeId: string;
    id: string;
    name: string;
    url: string;
    urlResolved: string;
    homepage: string;
    favicon: string;
    tags: string[];
    country: string;
    countryCode: string;
    state: string;
    language: string[];
    votes: number;
    lastChangeTime: Date;
    codec: string;
    bitrate: number;
    hls: boolean;
    lastCheckOk: boolean;
    lastCheckTime: Date;
    lastCheckOkTime: Date;
    lastLocalCheckTime: Date;
    clickTimestamp: Date;
    clickCount: number;
    clickTrend: number;
    geoLat?: number | null;
    geoLong?: number | null;
};
/**
 * @public
 */
export declare type StationQuery = {
    offset?: number;
    limit?: number;
    reverse?: boolean;
    order?: keyof typeof StationSearchOrder;
    hideBroken?: boolean;
    removeDuplicates?: boolean;
};
/**
 * @public
 */
export declare type AdvancedStationQuery = {
    name?: string;
    nameExact?: boolean;
    country?: string;
    countryExact?: boolean;
    countryCode?: string;
    state?: string;
    stateExact?: boolean;
    language?: string;
    languageExact?: boolean;
    tag?: string;
    tagExact?: boolean;
    tagList?: string[];
    codec?: string;
    bitrateMin?: string;
    bitrateMax?: string;
    hasGeoInfo?: boolean;
} & StationQuery;
/**
 * @public
 */
export declare type Query = {
    order?: 'name' | 'stationcount';
    reverse?: boolean;
    hideBroken?: boolean;
} & Record<string, any>;
/**
 * @public
 */
export declare type CountryResult = {
    name: string;
    stationcount: number;
};
/**
 * @public
 */
export declare type TagResult = CountryResult;
/**
 * @public
 */
export declare type CountryStateResult = CountryResult & {
    country: string;
};

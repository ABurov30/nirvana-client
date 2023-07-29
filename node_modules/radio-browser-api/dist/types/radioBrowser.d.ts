import { StationSearchType, AdvancedStationQuery, CountryResult, CountryStateResult, Query, Station, StationQuery, StationResponse, TagResult } from './constants';
/**
 * Query the radio browser api.
 * @public
 */
export declare class RadioBrowserApi {
    protected appName: string;
    protected hideBroken: boolean;
    static version: string;
    protected baseUrl: string | undefined;
    protected fetchConfig: RequestInit;
    /**
     * Creates an instance of radio browser api.
     * @param appName - App name to be used as user agent header to indentify the calls to the API
     * @param hideBroken - Hide broken stations for all future API calls
     */
    constructor(appName: string, hideBroken?: boolean);
    /**
     * Resolves API base url this will be the default for all class instances.
     * @param autoSet - Automatically set first resolved base url
     * @param config-  Fetch configuration
     * @returns Array of objects with the ip and name of the api server
     */
    resolveBaseUrl(config?: RequestInit): Promise<{
        ip: string;
        name: string;
    }[]>;
    /**
     * Sets base url for all api calls
     * @param url - Url to the api server
     */
    setBaseUrl(url: string): void;
    /**
     * Get current  base url
     * @returns Base url
     */
    getBaseUrl(): string | undefined;
    /**
     * Gets available countries
     * @param search - Search for country
     * @param query - Query params
     * @param fetchConfig - Fetch configuration
     * @returns Array of country results with the name of the station and station count
     */
    getCountries(search?: string, query?: Query, fetchConfig?: RequestInit): Promise<CountryResult[]>;
    /**
     * Gets countries by country code
     * @param search - Country code
     * @param query  - Query
     * @param fetchConfig - Fetch configuration
     * @returns Array of country results with the name of the station and station count
     */
    getCountryCodes(search?: string, query?: Query, fetchConfig?: RequestInit): Promise<CountryResult[]>;
    /**
     * Gets available codes
     * @param query - Query
     * @param fetchConfig -  Fetch configuration
     * @returns List of available codes
     */
    getCodecs(query?: Query, fetchConfig?: RequestInit): Promise<CountryResult[]>;
    /**
     * Gets country states. States **should** be regions inside a country.
     * @param country - Limit state to particular country
     * @param query - Query
     * @param fetchConfig - Fetch configuration
     * @returns Array of country states
     */
    getCountryStates(country?: string, query?: Query, fetchConfig?: RequestInit): Promise<CountryStateResult[]>;
    /**
     * Gets all available languages
     * @param language- Limit results to particular language
     * @param query -  Query
     * @param fetchConfig - Fetch configuration
     * @returns Array of language results
     */
    getLanguages(language?: string, query?: Query, fetchConfig?: RequestInit): Promise<CountryResult[]>;
    /**
     * Gets all available tags
     * @param tag - Limit results to particular tag
     * @param query - Query
     * @param fetchConfig - Fetch configuration
     * @returns List of tag results
     */
    getTags(tag?: string, query?: Query, fetchConfig?: RequestInit): Promise<TagResult[]>;
    /**
     * Gets stations by various available parameters
     * @param searchType - Parameter for the search
     * @param search - Search value for the parameter
     * @param query - Query
     * @param fetchConfig - Fetch configuration
     * @param removeDuplicates - remove duplicate stations
     * @returns Array of station results
     */
    getStationsBy(searchType: keyof typeof StationSearchType, search?: string, query?: StationQuery, fetchConfig?: RequestInit, removeDuplicates?: boolean): Promise<Station[]>;
    /**
     * Normalizes stations from the API response
     * @param stations - Array of station responses
     * @param removeDuplicates - remove duplicate stations
     * @returns Array of normalized stations
     */
    protected normalizeStations(stations: StationResponse[], removeDuplicates?: boolean): Station[];
    /**
     * Gets all available stations. Please note that if results
     * are not limited somehow, they can be huge (size in MB)
     * @param query - Query
     * @param fetchConfig - Fetch configuration
     * @param removeDuplicates - remove duplicate stations
     * @returns Array of all available stations
     */
    getAllStations(query?: Omit<StationQuery, 'hidebroken'>, fetchConfig?: RequestInit, removeDuplicates?: boolean): Promise<Station[]>;
    /**
     * Searches stations by particular params
     * @param query - Query
     * @param fetchConfig - Fetch configuration
     * @param removeDuplicates - remove duplicate stations
     * @returns Array of station results
     */
    searchStations(query: AdvancedStationQuery, fetchConfig?: RequestInit, removeDuplicates?: boolean): Promise<Station[]>;
    /**
     * Gets stations by clicks. Stations with the highest number of clicks are most popular
     * @param limit - Limit the number of returned stations
     * @param fetchConfig - Fetch configuration
     * @returns Array of stations
     */
    getStationsByClicks(limit?: number, fetchConfig?: RequestInit): Promise<Station[]>;
    /**
     * Gets stations by votes. Returns most voted stations
     * @param limit - Limit the number of returned stations
     * @param fetchConfig - Fetch configuration
     * @returns Array of stations
     */
    getStationsByVotes(limit?: number, fetchConfig?: RequestInit): Promise<Station[]>;
    /**
     * Gets stations by recent clicks. They are basically most recently listened stations.
     * @param limit - Limit the number of returned stations
     * @param fetchConfig - Fetch configuration
     * @returns Array of stations
     */
    getStationsByRecentClicks(limit?: number, fetchConfig?: RequestInit): Promise<Station[]>;
    /**
     * Sends click for the station. This method should be used when user starts to listen to the station.
     * @param id - Station id
     * @param fetchConfig  - Fetch configuration
     * @returns Station click object
     */
    sendStationClick(id: string, fetchConfig?: RequestInit): Promise<{
        ok: boolean;
        message: string;
        stationuuid: string;
        name: string;
        url: string;
    }>;
    /**
     * Votes for station. This method should be used when user adds the station to favourites etc..
     * @param id - Station id
     * @param fetchConfig - Fetch configuration
     * @returns Station vote object
     */
    voteForStation(id: string, fetchConfig?: RequestInit): Promise<{
        ok: boolean;
        message: string;
        stationuuid: string;
        name: string;
        url: string;
    }>;
    /**
     * Gets stations by station id
     * @param ids - Array of station id's
     * @param fetchConfig - Fetch configuration
     * @returns Array of stations
     */
    getStationsById(ids: string[], fetchConfig?: RequestInit): Promise<Station[]>;
    /**
     * Gets station by station url
     * @param url - Station url
     * @param fetchConfig - Fetch configuration
     * @returns Array of stations
     */
    getStationByUrl(url: string, fetchConfig?: RequestInit): Promise<Station[]>;
    protected resolveGetStations(endPoint: string, limit?: number, fetchConfig?: RequestInit): Promise<Station[]>;
    /**
     * Builds request to the API
     * @param endPoint - API endpoint
     * @param search - Search term
     * @param query - Query
     * @param addHideBrokenParam - Hide broken stations from the results
     * @returns Built request string
     */
    protected buildRequest(endPoint: string, search?: string, query?: Query | AdvancedStationQuery | StationQuery, addHideBrokenParam?: boolean): string;
    /**
     * Fires of the request to the API
     * @param url - Request url
     * @param fetchConfig - Fetch configuration
     * @returns Fetch response
     */
    protected runRequest<T>(url: string, fetchConfig?: RequestInit): Promise<T>;
    /**
     * Encodes query parameters
     * @param params - Object that represents paramters as key value pairs
     * @returns  String of encoded query parameters
     */
    protected createQueryParams(params?: object): string;
}

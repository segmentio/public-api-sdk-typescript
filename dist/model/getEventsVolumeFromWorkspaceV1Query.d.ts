export declare class GetEventsVolumeFromWorkspaceV1Query {
    'workspaceId': string;
    'granularity': GetEventsVolumeFromWorkspaceV1Query.GranularityEnum;
    'startTime': string;
    'endTime': string;
    'groupBy'?: Array<string>;
    'sourceId'?: Array<string>;
    'eventName'?: Array<string>;
    'eventType'?: Array<string>;
    'appVersion'?: Array<string>;
    'limit'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace GetEventsVolumeFromWorkspaceV1Query {
    enum GranularityEnum {
        day,
        hour,
        minute
    }
}

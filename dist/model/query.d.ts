export declare class Query {
    'workspaceId': string;
    'granularity': Query.GranularityEnum;
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
export declare namespace Query {
    enum GranularityEnum {
        DAY,
        HOUR,
        MINUTE
    }
}

export declare class AudienceOptionsWithLookback {
    'filterByExternalIds': Array<string>;
    'backfillEventDataDays'?: number;
    'includeHistoricalData'?: boolean;
    'includeAnonymousUsers'?: boolean;
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

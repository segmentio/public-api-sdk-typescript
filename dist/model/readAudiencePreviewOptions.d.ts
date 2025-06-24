export declare class ReadAudiencePreviewOptions {
    'filterByExternalIds': Array<string>;
    'includeHistoricalData': boolean;
    'backfillEventDataDays'?: number;
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

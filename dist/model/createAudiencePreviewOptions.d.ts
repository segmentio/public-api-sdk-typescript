export declare class CreateAudiencePreviewOptions {
    'filterByExternalIds'?: Array<string>;
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

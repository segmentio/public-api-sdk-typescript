export declare class TraitOptions {
    'includeHistoricalData'?: boolean;
    'includeAnonymousUsers'?: boolean;
    'backfillDurationDays'?: number;
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

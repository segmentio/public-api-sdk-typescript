export declare class PaginationOutput {
    'current': string;
    'next'?: string | null;
    'previous'?: string | null;
    'totalEntries'?: number;
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

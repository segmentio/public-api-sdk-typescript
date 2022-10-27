export declare class WarehouseSyncOverrideV1 {
    'sourceId': string;
    'collection'?: string;
    'enabled': boolean;
    'property'?: string;
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

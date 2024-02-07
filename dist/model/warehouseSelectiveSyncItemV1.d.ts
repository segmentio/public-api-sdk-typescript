export declare class WarehouseSelectiveSyncItemV1 {
    'sourceId': string;
    'collection': string;
    'warehouseId': string;
    'enabled': boolean;
    'properties': {
        [key: string]: any;
    };
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

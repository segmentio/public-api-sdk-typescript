export declare class SpaceWarehouseSelectiveSyncItemAlpha {
    'spaceId': string;
    'collection': string;
    'warehouseId': string;
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

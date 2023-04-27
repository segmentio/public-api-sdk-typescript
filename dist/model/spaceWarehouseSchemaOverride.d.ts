export declare class SpaceWarehouseSchemaOverride {
    'spaceId': string;
    'collection': string;
    'source': string;
    'enabled': boolean;
    'property': string;
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

export declare class UpdateProfilesWarehouseForSpaceWarehouseAlphaInput {
    'name'?: string;
    'enabled'?: boolean;
    'settings': {
        [key: string]: any;
    };
    'schemaName'?: string;
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

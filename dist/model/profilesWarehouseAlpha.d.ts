import { WarehouseMetadataV1 } from './warehouseMetadataV1';
export declare class ProfilesWarehouseAlpha {
    'id': string;
    'spaceId': string;
    'metadata': WarehouseMetadataV1;
    'workspaceId': string;
    'enabled': boolean;
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

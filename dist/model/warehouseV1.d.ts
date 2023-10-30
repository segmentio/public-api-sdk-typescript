import { WarehouseMetadataV1 } from './warehouseMetadataV1';
export declare class WarehouseV1 {
    'id': string;
    'metadata': WarehouseMetadataV1;
    'workspaceId': string;
    'enabled': boolean;
    'settings': {
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

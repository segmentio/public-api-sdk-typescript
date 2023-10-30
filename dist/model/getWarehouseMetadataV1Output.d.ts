import { WarehouseMetadataV1 } from './warehouseMetadataV1';
export declare class GetWarehouseMetadataV1Output {
    'warehouseMetadata': WarehouseMetadataV1;
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

import { WarehouseMetadata } from './warehouseMetadata';
export declare class GetWarehouseMetadataV1Output {
    'warehouseMetadata': WarehouseMetadata;
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

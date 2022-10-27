import { Pagination } from './pagination';
import { WarehouseMetadataV1 } from './warehouseMetadataV1';
export declare class GetWarehousesCatalogV1Output {
    'warehousesCatalog': Array<WarehouseMetadataV1>;
    'pagination': Pagination;
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

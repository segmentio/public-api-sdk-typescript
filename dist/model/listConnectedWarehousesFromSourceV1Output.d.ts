import { PaginationOutput } from './paginationOutput';
import { WarehouseV1 } from './warehouseV1';
export declare class ListConnectedWarehousesFromSourceV1Output {
    'warehouses': Array<WarehouseV1>;
    'pagination': PaginationOutput;
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

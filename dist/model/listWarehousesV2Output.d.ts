import { PaginationOutput } from './paginationOutput';
import { WarehouseV2 } from './warehouseV2';
export declare class ListWarehousesV2Output {
    'warehouses': Array<WarehouseV2>;
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

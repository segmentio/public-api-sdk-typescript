import { PaginationOutput } from './paginationOutput';
import { SourceV1 } from './sourceV1';
import { WarehouseV1 } from './warehouseV1';
export declare class ListCredentialConsumersV1Output {
    'warehouses': Array<WarehouseV1>;
    'warehousesPagination': PaginationOutput;
    'sources': Array<SourceV1>;
    'sourcesPagination': PaginationOutput;
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

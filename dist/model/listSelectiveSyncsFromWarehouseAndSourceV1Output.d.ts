import { Pagination } from './pagination';
import { WarehouseSelectiveSyncItemV1 } from './warehouseSelectiveSyncItemV1';
export declare class ListSelectiveSyncsFromWarehouseAndSourceV1Output {
    'items': Array<WarehouseSelectiveSyncItemV1>;
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

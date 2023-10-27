import { PaginationOutput } from './paginationOutput';
import { SyncV1 } from './syncV1';
export declare class ListSyncsFromWarehouseAndSourceV1Output {
    'reports': Array<SyncV1>;
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

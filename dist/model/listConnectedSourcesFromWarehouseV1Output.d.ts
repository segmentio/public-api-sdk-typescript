import { PaginationOutput } from './paginationOutput';
import { SourceV1 } from './sourceV1';
export declare class ListConnectedSourcesFromWarehouseV1Output {
    'sources': Array<SourceV1>;
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

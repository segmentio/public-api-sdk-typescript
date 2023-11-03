import { InsertFunctionInstanceAlpha } from './insertFunctionInstanceAlpha';
import { PaginationOutput } from './paginationOutput';
export declare class ListInsertFunctionInstancesAlphaOutput {
    'instances': Array<InsertFunctionInstanceAlpha>;
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

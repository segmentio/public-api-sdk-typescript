import { InsertFunctionInstanceAlpha } from './insertFunctionInstanceAlpha';
import { Pagination } from './pagination';
export declare class ListInsertFunctionInstancesAlphaOutput {
    'instances': Array<InsertFunctionInstanceAlpha>;
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

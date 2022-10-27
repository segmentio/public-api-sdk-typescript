import { Pagination } from './pagination';
import { SuppressedInner } from './suppressedInner';
export declare class ListSuppressionsV1Output {
    'suppressed': Array<SuppressedInner>;
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

import { PaginationOutput } from './paginationOutput';
import { SuppressedInner } from './suppressedInner';
export declare class ListSuppressionsV1Output {
    'suppressed': Array<SuppressedInner>;
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

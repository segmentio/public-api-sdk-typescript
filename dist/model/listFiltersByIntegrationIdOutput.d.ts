import { Filter } from './filter';
import { PaginationOutput } from './paginationOutput';
export declare class ListFiltersByIntegrationIdOutput {
    'filters'?: Array<Filter>;
    'pagination'?: PaginationOutput;
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

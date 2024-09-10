import { Filter } from './filter';
import { ListFiltersPaginationOutput } from './listFiltersPaginationOutput';
export declare class ListFiltersByIntegrationIdOutput {
    'filters'?: Array<Filter>;
    'pagination'?: ListFiltersPaginationOutput;
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

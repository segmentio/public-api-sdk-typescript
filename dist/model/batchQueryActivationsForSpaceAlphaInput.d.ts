import { PaginationInput } from './paginationInput';
export declare class BatchQueryActivationsForSpaceAlphaInput {
    'audienceIds'?: Array<string>;
    'pagination'?: PaginationInput;
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

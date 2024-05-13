import { PaginationInput } from './paginationInput';
export declare class ListTransformationsBetaInput {
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

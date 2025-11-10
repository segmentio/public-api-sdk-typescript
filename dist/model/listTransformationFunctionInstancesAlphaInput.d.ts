import { PaginationInput } from './paginationInput';
export declare class ListTransformationFunctionInstancesAlphaInput {
    'pagination'?: PaginationInput;
    'functionId': string;
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

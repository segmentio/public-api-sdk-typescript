import { ListSuppressionsV1Output } from './listSuppressionsV1Output';
export declare class ListSuppressions200Response {
    'data'?: ListSuppressionsV1Output;
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

import { ListFunctionsV1Output } from './listFunctionsV1Output';
export declare class ListFunctions200Response {
    'data'?: ListFunctionsV1Output;
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

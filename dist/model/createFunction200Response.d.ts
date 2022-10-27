import { CreateFunctionV1Output } from './createFunctionV1Output';
export declare class CreateFunction200Response {
    'data'?: CreateFunctionV1Output;
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

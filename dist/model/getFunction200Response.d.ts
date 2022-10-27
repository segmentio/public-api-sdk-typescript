import { GetFunctionV1Output } from './getFunctionV1Output';
export declare class GetFunction200Response {
    'data'?: GetFunctionV1Output;
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

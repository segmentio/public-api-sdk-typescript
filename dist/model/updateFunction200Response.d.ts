import { UpdateFunctionV1Output } from './updateFunctionV1Output';
export declare class UpdateFunction200Response {
    'data'?: UpdateFunctionV1Output;
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

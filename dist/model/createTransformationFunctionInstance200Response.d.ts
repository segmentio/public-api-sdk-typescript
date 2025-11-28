import { CreateTransformationFunctionInstanceAlphaOutput } from './createTransformationFunctionInstanceAlphaOutput';
export declare class CreateTransformationFunctionInstance200Response {
    'data'?: CreateTransformationFunctionInstanceAlphaOutput;
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

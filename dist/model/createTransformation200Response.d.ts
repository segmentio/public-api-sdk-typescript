import { CreateTransformationV1Output } from './createTransformationV1Output';
export declare class CreateTransformation200Response {
    'data'?: CreateTransformationV1Output;
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

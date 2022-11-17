import { UpdateTransformationV1Output } from './updateTransformationV1Output';
export declare class UpdateTransformation200Response {
    'data'?: UpdateTransformationV1Output;
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

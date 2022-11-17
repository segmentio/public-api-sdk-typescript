import { GetTransformationV1Output } from './getTransformationV1Output';
export declare class GetTransformation200Response {
    'data'?: GetTransformationV1Output;
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

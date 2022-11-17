import { DeleteTransformationV1Output } from './deleteTransformationV1Output';
export declare class DeleteTransformation200Response {
    'data'?: DeleteTransformationV1Output;
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

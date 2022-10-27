import { UpdateTransformationBetaOutput } from './updateTransformationBetaOutput';
export declare class UpdateTransformation200Response {
    'data'?: UpdateTransformationBetaOutput;
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

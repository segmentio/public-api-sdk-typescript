import { DeleteTransformationBetaOutput } from './deleteTransformationBetaOutput';
export declare class DeleteTransformation200Response {
    'data'?: DeleteTransformationBetaOutput;
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

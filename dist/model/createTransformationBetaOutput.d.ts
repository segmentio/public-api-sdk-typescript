import { TransformationBeta } from './transformationBeta';
export declare class CreateTransformationBetaOutput {
    'transformation': TransformationBeta;
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

import { TransformationV1 } from './transformationV1';
export declare class UpdateTransformationV1Output {
    'transformation': TransformationV1;
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

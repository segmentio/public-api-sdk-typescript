import { GetTransformationBetaOutput } from './getTransformationBetaOutput';
export declare class GetTransformation200Response {
    'data'?: GetTransformationBetaOutput;
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

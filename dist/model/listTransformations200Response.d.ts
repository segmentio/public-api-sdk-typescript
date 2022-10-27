import { ListTransformationsBetaOutput } from './listTransformationsBetaOutput';
export declare class ListTransformations200Response {
    'data'?: ListTransformationsBetaOutput;
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

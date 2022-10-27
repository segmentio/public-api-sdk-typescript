import { CreateLabelV1Output } from './createLabelV1Output';
export declare class CreateLabel200Response1 {
    'data'?: CreateLabelV1Output;
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

import { CreateLabelAlphaOutput } from './createLabelAlphaOutput';
export declare class CreateLabel200Response1 {
    'data'?: CreateLabelAlphaOutput;
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

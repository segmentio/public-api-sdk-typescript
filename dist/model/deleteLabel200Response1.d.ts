import { DeleteLabelAlphaOutput } from './deleteLabelAlphaOutput';
export declare class DeleteLabel200Response1 {
    'data'?: DeleteLabelAlphaOutput;
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

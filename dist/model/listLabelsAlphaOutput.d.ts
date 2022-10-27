import { LabelAlpha } from './labelAlpha';
export declare class ListLabelsAlphaOutput {
    'labels': Array<LabelAlpha>;
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

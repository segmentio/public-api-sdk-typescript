import { LabelV1 } from './labelV1';
export declare class ReplaceLabelsInSourceV1Input {
    'labels': Array<LabelV1>;
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

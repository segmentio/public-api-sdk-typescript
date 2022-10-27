import { ReplaceLabelsInSourceAlphaOutput } from './replaceLabelsInSourceAlphaOutput';
export declare class ReplaceLabelsInSource200Response {
    'data'?: ReplaceLabelsInSourceAlphaOutput;
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

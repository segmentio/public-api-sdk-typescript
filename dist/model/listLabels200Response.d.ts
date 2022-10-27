import { ListLabelsAlphaOutput } from './listLabelsAlphaOutput';
export declare class ListLabels200Response {
    'data'?: ListLabelsAlphaOutput;
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

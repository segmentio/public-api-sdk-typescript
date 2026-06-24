import { ListTraitsAlphaOutput } from './listTraitsAlphaOutput';
export declare class ListTraits200Response {
    'data'?: ListTraitsAlphaOutput;
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

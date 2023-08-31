import { ListComputedTraitsAlphaOutput } from './listComputedTraitsAlphaOutput';
export declare class ListComputedTraits200Response {
    'data'?: ListComputedTraitsAlphaOutput;
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

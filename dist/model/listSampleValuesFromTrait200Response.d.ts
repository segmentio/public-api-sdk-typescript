import { ListSampleValuesFromTraitAlphaOutput } from './listSampleValuesFromTraitAlphaOutput';
export declare class ListSampleValuesFromTrait200Response {
    'data'?: ListSampleValuesFromTraitAlphaOutput;
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

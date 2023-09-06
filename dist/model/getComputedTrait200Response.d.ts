import { GetComputedTraitAlphaOutput } from './getComputedTraitAlphaOutput';
export declare class GetComputedTrait200Response {
    'data'?: GetComputedTraitAlphaOutput;
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

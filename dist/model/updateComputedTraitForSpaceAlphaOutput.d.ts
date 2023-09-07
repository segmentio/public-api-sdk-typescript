import { ComputedTrait } from './computedTrait';
export declare class UpdateComputedTraitForSpaceAlphaOutput {
    'computedTrait': ComputedTrait;
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

import { ComputedTraitSummary } from './computedTraitSummary';
export declare class CreateComputedTraitAlphaOutput {
    'computedTrait': ComputedTraitSummary;
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

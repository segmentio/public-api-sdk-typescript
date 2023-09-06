import { ComputedTraitSummary } from './computedTraitSummary';
import { Pagination } from './pagination';
export declare class ListComputedTraitsAlphaOutput {
    'computedTraits': Array<ComputedTraitSummary>;
    'pagination': Pagination;
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

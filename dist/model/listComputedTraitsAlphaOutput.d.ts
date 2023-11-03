import { ComputedTraitSummary } from './computedTraitSummary';
import { PaginationOutput } from './paginationOutput';
export declare class ListComputedTraitsAlphaOutput {
    'computedTraits': Array<ComputedTraitSummary>;
    'pagination': PaginationOutput;
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

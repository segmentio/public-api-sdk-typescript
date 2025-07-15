import { ActivationSummaryOutput } from './activationSummaryOutput';
import { PaginationOutput } from './paginationOutput';
export declare class ListActivationsFromAudienceOutput {
    'activations': Array<ActivationSummaryOutput>;
    'pagination'?: PaginationOutput;
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

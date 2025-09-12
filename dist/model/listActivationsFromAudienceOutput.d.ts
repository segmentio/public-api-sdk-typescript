import { ActivationOutput } from './activationOutput';
import { PaginationOutput } from './paginationOutput';
export declare class ListActivationsFromAudienceOutput {
    'activations': Array<ActivationOutput>;
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

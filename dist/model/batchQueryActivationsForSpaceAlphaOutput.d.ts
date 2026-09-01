import { ActivationOutput } from './activationOutput';
import { ErrorsInner } from './errorsInner';
import { PaginationOutput } from './paginationOutput';
export declare class BatchQueryActivationsForSpaceAlphaOutput {
    'activations': Array<ActivationOutput>;
    'errors': Array<ErrorsInner>;
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

import { ForwardOnlyPaginationOutput } from './forwardOnlyPaginationOutput';
import { TraitAlpha } from './traitAlpha';
export declare class ListTraitsAlphaOutput {
    'traits': Array<TraitAlpha>;
    'pagination': ForwardOnlyPaginationOutput;
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

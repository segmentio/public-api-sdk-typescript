import { PaginationOutput } from './paginationOutput';
import { SimpleDestination } from './simpleDestination';
export declare class ListDestinationsFromAudienceAlphaOutput {
    'connections': Array<SimpleDestination>;
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

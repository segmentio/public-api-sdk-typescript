import { PaginationOutput } from './paginationOutput';
import { Space } from './space';
export declare class ListSpacesAlphaOutput {
    'spaces': Array<Space>;
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

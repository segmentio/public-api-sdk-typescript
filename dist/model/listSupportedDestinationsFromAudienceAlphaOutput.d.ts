import { PaginationOutput } from './paginationOutput';
export declare class ListSupportedDestinationsFromAudienceAlphaOutput {
    'destinations': {
        [key: string]: any;
    };
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

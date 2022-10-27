import { DestinationFilterV1 } from './destinationFilterV1';
import { Pagination } from './pagination';
export declare class ListFiltersFromDestinationV1Output {
    'filters': Array<DestinationFilterV1>;
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

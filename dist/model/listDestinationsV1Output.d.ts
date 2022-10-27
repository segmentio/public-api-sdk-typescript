import { DestinationV1 } from './destinationV1';
import { Pagination } from './pagination';
export declare class ListDestinationsV1Output {
    'destinations': Array<DestinationV1>;
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

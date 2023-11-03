import { DestinationV1 } from './destinationV1';
import { PaginationOutput } from './paginationOutput';
export declare class ListConnectedDestinationsFromSourceV1Output {
    'destinations': Array<DestinationV1>;
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

import { DestinationMetadataV1 } from './destinationMetadataV1';
import { PaginationOutput } from './paginationOutput';
export declare class GetDestinationsCatalogV1Output {
    'destinationsCatalog': Array<DestinationMetadataV1>;
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

import { DestinationMetadataV1 } from './destinationMetadataV1';
import { Pagination } from './pagination';
export declare class GetDestinationsCatalogV1Output {
    'destinationsCatalog': Array<DestinationMetadataV1>;
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

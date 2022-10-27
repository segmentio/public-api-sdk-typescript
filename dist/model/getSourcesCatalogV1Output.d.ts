import { Pagination } from './pagination';
import { SourceMetadataV1 } from './sourceMetadataV1';
export declare class GetSourcesCatalogV1Output {
    'sourcesCatalog': Array<SourceMetadataV1>;
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

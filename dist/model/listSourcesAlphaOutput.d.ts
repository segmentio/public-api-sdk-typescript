import { Pagination } from './pagination';
import { SourceAlpha } from './sourceAlpha';
export declare class ListSourcesAlphaOutput {
    'sources': Array<SourceAlpha>;
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

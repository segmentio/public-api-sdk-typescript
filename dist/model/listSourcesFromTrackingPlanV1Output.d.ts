import { Pagination } from './pagination';
import { SourceV1 } from './sourceV1';
export declare class ListSourcesFromTrackingPlanV1Output {
    'sources': Array<SourceV1>;
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

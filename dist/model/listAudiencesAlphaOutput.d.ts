import { AudienceSummary } from './audienceSummary';
import { Pagination } from './pagination';
export declare class ListAudiencesAlphaOutput {
    'audiences': Array<AudienceSummary>;
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

import { AudienceSummaryBeta } from './audienceSummaryBeta';
import { PaginationOutput } from './paginationOutput';
export declare class ListAudiencesBetaOutput {
    'audiences': Array<AudienceSummaryBeta>;
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

import { AudienceSummaryWithAudienceTypeAndLookback } from './audienceSummaryWithAudienceTypeAndLookback';
import { PaginationOutput } from './paginationOutput';
export declare class ListAudiencesOutput {
    'audiences': Array<AudienceSummaryWithAudienceTypeAndLookback>;
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

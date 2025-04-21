import { AudienceSummary } from './audienceSummary';
import { PaginationOutput } from './paginationOutput';
export declare class ListAudiencesBetaOutput {
    'audiences': Array<AudienceSummary>;
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

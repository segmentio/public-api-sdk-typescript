import { AudienceSummaryBeta } from './audienceSummaryBeta';
export declare class GetAudienceBetaOutput {
    'audience': AudienceSummaryBeta;
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

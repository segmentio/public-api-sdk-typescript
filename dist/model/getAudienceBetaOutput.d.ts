import { AudienceSummaryWithAudienceTypeAndLookback } from './audienceSummaryWithAudienceTypeAndLookback';
export declare class GetAudienceBetaOutput {
    'audience': AudienceSummaryWithAudienceTypeAndLookback;
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

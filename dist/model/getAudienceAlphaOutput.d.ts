import { AudienceSummary } from './audienceSummary';
export declare class GetAudienceAlphaOutput {
    'audience': AudienceSummary;
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

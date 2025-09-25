import { AudienceRunInfo } from './audienceRunInfo';
export declare class ForceExecuteAudienceRunAlphaOutput {
    'run': AudienceRunInfo;
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

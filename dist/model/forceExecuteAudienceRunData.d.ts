import { AudienceRunInfo } from './audienceRunInfo';
export declare class ForceExecuteAudienceRunData {
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

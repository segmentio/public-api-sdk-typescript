import { AudienceSchedule } from './audienceSchedule';
export declare class AddAudienceScheduleToAudienceAlphaOutput {
    'audienceSchedule': AudienceSchedule;
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

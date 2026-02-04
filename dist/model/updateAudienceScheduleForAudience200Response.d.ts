import { UpdateAudienceScheduleForAudienceOutput } from './updateAudienceScheduleForAudienceOutput';
export declare class UpdateAudienceScheduleForAudience200Response {
    'data'?: UpdateAudienceScheduleForAudienceOutput;
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

import { UpdateAudienceScheduleForAudienceAlphaOutput } from './updateAudienceScheduleForAudienceAlphaOutput';
export declare class UpdateAudienceScheduleForAudience200Response {
    'data'?: UpdateAudienceScheduleForAudienceAlphaOutput;
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

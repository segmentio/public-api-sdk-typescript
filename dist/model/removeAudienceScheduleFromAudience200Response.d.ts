import { RemoveAudienceScheduleFromAudienceAlphaOutput } from './removeAudienceScheduleFromAudienceAlphaOutput';
export declare class RemoveAudienceScheduleFromAudience200Response {
    'data'?: RemoveAudienceScheduleFromAudienceAlphaOutput;
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

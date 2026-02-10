import { RemoveAudienceScheduleFromAudienceOutput } from './removeAudienceScheduleFromAudienceOutput';
export declare class RemoveAudienceScheduleFromAudience200Response {
    'data'?: RemoveAudienceScheduleFromAudienceOutput;
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

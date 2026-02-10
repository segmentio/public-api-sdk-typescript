import { AddAudienceScheduleToAudienceOutput } from './addAudienceScheduleToAudienceOutput';
export declare class AddAudienceScheduleToAudience200Response {
    'data'?: AddAudienceScheduleToAudienceOutput;
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

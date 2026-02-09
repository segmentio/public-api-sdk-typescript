import { AddAudienceScheduleToAudienceAlphaOutput } from './addAudienceScheduleToAudienceAlphaOutput';
export declare class AddAudienceScheduleToAudience200Response {
    'data'?: AddAudienceScheduleToAudienceAlphaOutput;
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

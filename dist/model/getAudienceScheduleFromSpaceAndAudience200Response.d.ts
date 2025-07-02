import { GetAudienceScheduleFromSpaceAndAudienceAlphaOutput } from './getAudienceScheduleFromSpaceAndAudienceAlphaOutput';
export declare class GetAudienceScheduleFromSpaceAndAudience200Response {
    'data'?: GetAudienceScheduleFromSpaceAndAudienceAlphaOutput;
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

import { GetAudienceScheduleFromSpaceAndAudienceOutput } from './getAudienceScheduleFromSpaceAndAudienceOutput';
export declare class GetAudienceScheduleFromSpaceAndAudience200Response {
    'data'?: GetAudienceScheduleFromSpaceAndAudienceOutput;
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

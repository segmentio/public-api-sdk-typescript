import { ListAudienceSchedulesFromSpaceAndAudienceAlphaOutput } from './listAudienceSchedulesFromSpaceAndAudienceAlphaOutput';
export declare class ListAudienceSchedulesFromSpaceAndAudience200Response {
    'data'?: ListAudienceSchedulesFromSpaceAndAudienceAlphaOutput;
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

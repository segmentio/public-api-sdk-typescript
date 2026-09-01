import { ListAudienceConsumersFromSpaceAndAudienceAlphaOutput } from './listAudienceConsumersFromSpaceAndAudienceAlphaOutput';
export declare class ListAudienceConsumersFromSpaceAndAudience200Response {
    'data'?: ListAudienceConsumersFromSpaceAndAudienceAlphaOutput;
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

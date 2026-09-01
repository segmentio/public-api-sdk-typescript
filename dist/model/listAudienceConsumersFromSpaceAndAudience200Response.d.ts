import { ListAudienceConsumersFromSpaceAndAudienceOutput } from './listAudienceConsumersFromSpaceAndAudienceOutput';
export declare class ListAudienceConsumersFromSpaceAndAudience200Response {
    'data'?: ListAudienceConsumersFromSpaceAndAudienceOutput;
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

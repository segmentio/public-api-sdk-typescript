import { ListDestinationsFromAudienceAlphaOutput } from './listDestinationsFromAudienceAlphaOutput';
export declare class ListDestinationsFromAudience200Response {
    'data'?: ListDestinationsFromAudienceAlphaOutput;
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

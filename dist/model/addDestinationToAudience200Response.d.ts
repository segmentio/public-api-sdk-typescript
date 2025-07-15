import { AddDestinationToAudienceAlphaOutput } from './addDestinationToAudienceAlphaOutput';
export declare class AddDestinationToAudience200Response {
    'data'?: AddDestinationToAudienceAlphaOutput;
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

import { RemoveDestinationFromAudienceAlphaOutput } from './removeDestinationFromAudienceAlphaOutput';
export declare class RemoveDestinationFromAudience200Response {
    'data'?: RemoveDestinationFromAudienceAlphaOutput;
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

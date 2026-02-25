import { UpdateDestinationForAudienceAlphaOutput } from './updateDestinationForAudienceAlphaOutput';
export declare class UpdateDestinationForAudience200Response {
    'data'?: UpdateDestinationForAudienceAlphaOutput;
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

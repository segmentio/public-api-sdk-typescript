import { RemoveAudienceFromSpaceAlphaOutput } from './removeAudienceFromSpaceAlphaOutput';
export declare class RemoveAudienceFromSpace200Response {
    'data'?: RemoveAudienceFromSpaceAlphaOutput;
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

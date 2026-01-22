import { RemoveAudienceFromSpaceOutput } from './removeAudienceFromSpaceOutput';
export declare class RemoveAudienceFromSpace200Response {
    'data'?: RemoveAudienceFromSpaceOutput;
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

import { GetAudienceAlphaOutput } from './getAudienceAlphaOutput';
export declare class GetAudience200Response1 {
    'data'?: GetAudienceAlphaOutput;
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

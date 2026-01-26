import { GetAudiencePreviewAlphaOutput } from './getAudiencePreviewAlphaOutput';
export declare class GetAudiencePreview200Response2 {
    'data'?: GetAudiencePreviewAlphaOutput;
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

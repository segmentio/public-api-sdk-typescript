import { CreateAudiencePreviewAlphaOutput } from './createAudiencePreviewAlphaOutput';
export declare class CreateAudiencePreview200Response {
    'data'?: CreateAudiencePreviewAlphaOutput;
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

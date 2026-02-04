import { CreateAudiencePreviewOutput } from './createAudiencePreviewOutput';
export declare class CreateAudiencePreview200Response {
    'data'?: CreateAudiencePreviewOutput;
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

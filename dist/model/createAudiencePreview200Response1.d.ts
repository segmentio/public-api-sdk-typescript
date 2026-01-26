import { CreateAudiencePreviewBetaOutput } from './createAudiencePreviewBetaOutput';
export declare class CreateAudiencePreview200Response1 {
    'data'?: CreateAudiencePreviewBetaOutput;
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

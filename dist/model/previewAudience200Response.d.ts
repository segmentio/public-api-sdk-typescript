import { PreviewAudienceOutput } from './previewAudienceOutput';
export declare class PreviewAudience200Response {
    'data'?: PreviewAudienceOutput;
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

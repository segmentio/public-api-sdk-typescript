import { GetAudiencePreviewBetaOutput } from './getAudiencePreviewBetaOutput';
export declare class GetAudiencePreview200Response {
    'data'?: GetAudiencePreviewBetaOutput;
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

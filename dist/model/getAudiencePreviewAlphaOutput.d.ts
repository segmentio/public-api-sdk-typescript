import { AudiencePreview } from './audiencePreview';
export declare class GetAudiencePreviewAlphaOutput {
    'audiencePreview': AudiencePreview;
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

import { AudiencePreviewIdentifier } from './audiencePreviewIdentifier';
export declare class CreateAudiencePreviewAlphaOutput {
    'audiencePreview': AudiencePreviewIdentifier;
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

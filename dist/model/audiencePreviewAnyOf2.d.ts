import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewOptions } from './audiencePreviewOptions';
export declare class AudiencePreviewAnyOf2 {
    'status': AudiencePreviewAnyOf2.StatusEnum;
    'failureReason'?: string;
    'id': string;
    'audienceType': AudiencePreviewAnyOf2.AudienceTypeEnum;
    'definition': AudienceDefinitionWithoutType;
    'options': AudiencePreviewOptions;
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
export declare namespace AudiencePreviewAnyOf2 {
    enum StatusEnum {
        FAILED
    }
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

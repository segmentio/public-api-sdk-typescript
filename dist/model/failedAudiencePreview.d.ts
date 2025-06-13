import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewOptions } from './audiencePreviewOptions';
export declare class FailedAudiencePreview {
    'status': FailedAudiencePreview.StatusEnum;
    'failureReason'?: string;
    'id': string;
    'audienceType': FailedAudiencePreview.AudienceTypeEnum;
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
export declare namespace FailedAudiencePreview {
    enum StatusEnum {
        FAILED
    }
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewOptions } from './audiencePreviewOptions';
import { AudiencePreviewResult } from './audiencePreviewResult';
import { AudienceSize } from './audienceSize';
export declare class AudiencePreview {
    'id': string;
    'audienceType': AudiencePreview.AudienceTypeEnum;
    'definition': AudienceDefinitionWithoutType;
    'options': AudiencePreviewOptions;
    'status': AudiencePreview.StatusEnum;
    'results'?: Array<AudiencePreviewResult>;
    'size'?: AudienceSize;
    'failureReason'?: string;
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
export declare namespace AudiencePreview {
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
    enum StatusEnum {
        COMPLETED,
        FAILED,
        RUNNING
    }
}

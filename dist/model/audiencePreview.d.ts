import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewOptions } from './audiencePreviewOptions';
import { AudiencePreviewResult } from './audiencePreviewResult';
import { AudienceSize } from './audienceSize';
export declare class AudiencePreview {
    'status': AudiencePreview.StatusEnum;
    'results': Array<AudiencePreviewResult>;
    'size': AudienceSize;
    'id': string;
    'audienceType': AudiencePreview.AudienceTypeEnum;
    'definition': AudienceDefinitionWithoutType;
    'options': AudiencePreviewOptions;
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
    enum StatusEnum {
        FAILED
    }
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

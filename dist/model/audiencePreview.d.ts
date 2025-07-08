import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewResult } from './audiencePreviewResult';
import { AudienceSize } from './audienceSize';
import { ReadAudiencePreviewOptions } from './readAudiencePreviewOptions';
export declare class AudiencePreview {
    'id': string;
    'audienceType': AudiencePreview.AudienceTypeEnum;
    'definition': AudienceDefinitionWithoutType;
    'options': ReadAudiencePreviewOptions;
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
        LINKED,
        USERS
    }
    enum StatusEnum {
        COMPLETED,
        FAILED,
        RUNNING
    }
}

import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudienceOptionsWithLookback } from './audienceOptionsWithLookback';
import { AudiencePreviewResult } from './audiencePreviewResult';
import { AudienceSize } from './audienceSize';
export declare class CompletedAudiencePreview {
    'status': CompletedAudiencePreview.StatusEnum;
    'results': Array<AudiencePreviewResult>;
    'size': AudienceSize;
    'id': string;
    'audienceType': CompletedAudiencePreview.AudienceTypeEnum;
    'definition': AudienceDefinitionWithoutType;
    'options': AudienceOptionsWithLookback;
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
export declare namespace CompletedAudiencePreview {
    enum StatusEnum {
        COMPLETED
    }
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

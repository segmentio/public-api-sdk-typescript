import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewOptions } from './audiencePreviewOptions';
export declare class RunningAudiencePreview {
    'status': RunningAudiencePreview.StatusEnum;
    'id': string;
    'audienceType': RunningAudiencePreview.AudienceTypeEnum;
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
export declare namespace RunningAudiencePreview {
    enum StatusEnum {
        RUNNING
    }
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

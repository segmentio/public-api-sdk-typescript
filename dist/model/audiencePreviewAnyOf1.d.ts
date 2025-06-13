import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewOptions } from './audiencePreviewOptions';
export declare class AudiencePreviewAnyOf1 {
    'status': AudiencePreviewAnyOf1.StatusEnum;
    'id': string;
    'audienceType': AudiencePreviewAnyOf1.AudienceTypeEnum;
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
export declare namespace AudiencePreviewAnyOf1 {
    enum StatusEnum {
        RUNNING
    }
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

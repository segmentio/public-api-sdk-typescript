import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudiencePreviewOptions } from './audiencePreviewOptions';
export declare class CreateAudiencePreviewAlphaInput {
    'definition': AudienceDefinitionWithoutType;
    'audienceType': CreateAudiencePreviewAlphaInput.AudienceTypeEnum;
    'options'?: AudiencePreviewOptions;
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
export declare namespace CreateAudiencePreviewAlphaInput {
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudienceOptionsWithLookback } from './audienceOptionsWithLookback';
export declare class CreateAudiencePreviewAlphaInput {
    'definition': AudienceDefinitionWithoutType;
    'audienceType': CreateAudiencePreviewAlphaInput.AudienceTypeEnum;
    'options'?: AudienceOptionsWithLookback;
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

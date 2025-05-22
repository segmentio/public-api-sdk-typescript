import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudienceOptionsWithLookback } from './audienceOptionsWithLookback';
export declare class PreviewAudienceInput {
    'definition': AudienceDefinitionWithoutType;
    'audienceType': PreviewAudienceInput.AudienceTypeEnum;
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
export declare namespace PreviewAudienceInput {
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { AudienceOptionsWithLookback } from './audienceOptionsWithLookback';
export declare class CommonAudiencePreview {
    'id': string;
    'audienceType': CommonAudiencePreview.AudienceTypeEnum;
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
export declare namespace CommonAudiencePreview {
    enum AudienceTypeEnum {
        ACCOUNTS,
        USERS
    }
}

import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { CreateAudiencePreviewOptions } from './createAudiencePreviewOptions';
export declare class CreateAudiencePreviewAlphaInput {
    'definition': AudienceDefinitionWithoutType;
    'audienceType': CreateAudiencePreviewAlphaInput.AudienceTypeEnum;
    'options'?: CreateAudiencePreviewOptions;
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
        LINKED,
        USERS
    }
}

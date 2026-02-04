import { AudienceDefinition } from './audienceDefinition';
import { CreateAudiencePreviewOptions } from './createAudiencePreviewOptions';
export declare class CreateAudiencePreviewInput {
    'definition': AudienceDefinition;
    'audienceType': CreateAudiencePreviewInput.AudienceTypeEnum;
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
export declare namespace CreateAudiencePreviewInput {
    enum AudienceTypeEnum {
        ACCOUNTS,
        LINKED,
        USERS
    }
}

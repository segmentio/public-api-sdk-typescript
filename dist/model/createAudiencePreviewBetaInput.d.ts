import { AudienceDefinition } from './audienceDefinition';
import { CreateAudiencePreviewOptions } from './createAudiencePreviewOptions';
export declare class CreateAudiencePreviewBetaInput {
    'definition': AudienceDefinition;
    'audienceType': CreateAudiencePreviewBetaInput.AudienceTypeEnum;
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
export declare namespace CreateAudiencePreviewBetaInput {
    enum AudienceTypeEnum {
        ACCOUNTS,
        LINKED,
        USERS
    }
}

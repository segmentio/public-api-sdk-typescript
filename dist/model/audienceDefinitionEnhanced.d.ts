import { AudienceConditionsWrapper } from './audienceConditionsWrapper';
export declare class AudienceDefinitionEnhanced {
    'type'?: AudienceDefinitionEnhanced.TypeEnum;
    'targetEntity'?: string;
    'conditions'?: Array<AudienceConditionsWrapper>;
    'query': string;
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
export declare namespace AudienceDefinitionEnhanced {
    enum TypeEnum {
        ACCOUNTS,
        USERS
    }
}

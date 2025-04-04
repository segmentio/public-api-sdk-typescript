export declare class AudienceDefinitionBeta {
    'query': string;
    'type': AudienceDefinitionBeta.TypeEnum;
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
export declare namespace AudienceDefinitionBeta {
    enum TypeEnum {
        ACCOUNTS,
        USERS
    }
}

export declare class AudienceDefinition {
    'type': AudienceDefinition.TypeEnum;
    'query': string;
    'targetEntity'?: string;
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
export declare namespace AudienceDefinition {
    enum TypeEnum {
        ACCOUNTS,
        USERS
    }
}

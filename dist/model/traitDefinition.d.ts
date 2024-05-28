export declare class TraitDefinition {
    'type': TraitDefinition.TypeEnum;
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
export declare namespace TraitDefinition {
    enum TypeEnum {
        ACCOUNTS,
        USERS
    }
}

export declare class AudienceDefinition {
    'query': string;
    'type': AudienceDefinition.TypeEnum;
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
        accounts,
        users
    }
}

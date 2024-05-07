export declare class AudienceComputationDefinition {
    'type': AudienceComputationDefinition.TypeEnum;
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
export declare namespace AudienceComputationDefinition {
    enum TypeEnum {
        accounts,
        users
    }
}

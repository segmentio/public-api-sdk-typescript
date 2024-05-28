export declare class ComputedTraitsDefinition {
    'query': string;
    'type': ComputedTraitsDefinition.TypeEnum;
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
export declare namespace ComputedTraitsDefinition {
    enum TypeEnum {
        ACCOUNTS,
        USERS
    }
}

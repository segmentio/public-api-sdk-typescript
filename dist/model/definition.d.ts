export declare class Definition {
    'query': string;
    'type': Definition.TypeEnum;
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
export declare namespace Definition {
    enum TypeEnum {
        accounts,
        users
    }
}

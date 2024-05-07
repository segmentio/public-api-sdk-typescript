export declare class Definition1 {
    'query': string;
    'type': Definition1.TypeEnum;
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
export declare namespace Definition1 {
    enum TypeEnum {
        accounts,
        users
    }
}

export declare class DefaultBranch {
    'type': DefaultBranch.TypeEnum;
    'next': string;
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
export declare namespace DefaultBranch {
    enum TypeEnum {
        DEFAULT
    }
}

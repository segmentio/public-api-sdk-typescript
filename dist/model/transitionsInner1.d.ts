export declare class TransitionsInner1 {
    'type': TransitionsInner1.TypeEnum;
    'condition': string;
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
export declare namespace TransitionsInner1 {
    enum TypeEnum {
        CONDITION,
        TIMEOUT,
        DEFAULT
    }
}

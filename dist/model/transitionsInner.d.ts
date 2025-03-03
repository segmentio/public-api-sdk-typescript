export declare class TransitionsInner {
    'type': TransitionsInner.TypeEnum;
    'condition': string;
    'next': string;
    'duration': string;
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
export declare namespace TransitionsInner {
    enum TypeEnum {
        CONDITION,
        TIMEOUT
    }
}

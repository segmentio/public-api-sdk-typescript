export declare class ConditionBranch {
    'type': ConditionBranch.TypeEnum;
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
export declare namespace ConditionBranch {
    enum TypeEnum {
        CONDITION
    }
}

export declare class ComputeConditionsWrapper {
    'format': ComputeConditionsWrapper.FormatEnum;
    'conditions': object | null;
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
export declare namespace ComputeConditionsWrapper {
    enum FormatEnum {
        AST,
        CQL
    }
}

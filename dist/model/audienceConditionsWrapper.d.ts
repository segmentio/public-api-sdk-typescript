export declare class AudienceConditionsWrapper {
    'format': AudienceConditionsWrapper.FormatEnum;
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
export declare namespace AudienceConditionsWrapper {
    enum FormatEnum {
        AST,
        CQL
    }
}

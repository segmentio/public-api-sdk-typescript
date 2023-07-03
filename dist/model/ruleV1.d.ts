export declare class RuleV1 {
    'type': RuleV1.TypeEnum;
    'key'?: string;
    'jsonSchema'?: any | null;
    'version'?: number;
    'createdAt'?: string;
    'updatedAt'?: string;
    'deprecatedAt'?: string;
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
export declare namespace RuleV1 {
    enum TypeEnum {
        COMMON,
        GROUP,
        IDENTIFY,
        PAGE,
        SCREEN,
        TRACK
    }
}

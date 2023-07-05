export declare class UpsertRuleV1 {
    'newKey'?: string;
    'type': UpsertRuleV1.TypeEnum;
    'key'?: string;
    'jsonSchema': any | null;
    'version': number;
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
export declare namespace UpsertRuleV1 {
    enum TypeEnum {
        COMMON,
        GROUP,
        IDENTIFY,
        PAGE,
        SCREEN,
        TRACK
    }
}

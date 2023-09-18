export declare class RuleInputV1 {
    'type': RuleInputV1.TypeEnum;
    'key'?: string;
    'jsonSchema': any | null;
    'version': number;
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
export declare namespace RuleInputV1 {
    enum TypeEnum {
        COMMON,
        GROUP,
        IDENTIFY,
        PAGE,
        SCREEN,
        TRACK
    }
}

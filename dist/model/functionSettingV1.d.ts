export declare class FunctionSettingV1 {
    'name': string;
    'label': string;
    'description': string;
    'type': FunctionSettingV1.TypeEnum;
    'required': boolean;
    'sensitive': boolean;
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
export declare namespace FunctionSettingV1 {
    enum TypeEnum {
        ARRAY,
        BOOLEAN,
        STRING,
        TEXT_MAP
    }
}

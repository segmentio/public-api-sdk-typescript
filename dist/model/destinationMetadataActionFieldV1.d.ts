export declare class DestinationMetadataActionFieldV1 {
    'id': string;
    'sortOrder': number;
    'fieldKey': string;
    'label': string;
    'type': DestinationMetadataActionFieldV1.TypeEnum;
    'description': string;
    'placeholder'?: string;
    'defaultValue'?: any | null;
    'required': boolean;
    'multiple': boolean;
    'choices'?: any | null;
    'dynamic': boolean;
    'allowNull': boolean;
    'hidden'?: boolean;
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
export declare namespace DestinationMetadataActionFieldV1 {
    enum TypeEnum {
        BOOLEAN,
        DATETIME,
        HIDDEN,
        INTEGER,
        NUMBER,
        OBJECT,
        PASSWORD,
        STRING,
        TEXT
    }
}

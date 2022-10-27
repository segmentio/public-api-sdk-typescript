export declare class ResourceV1 {
    'id': string;
    'type': ResourceV1.TypeEnum;
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
export declare namespace ResourceV1 {
    enum TypeEnum {
        FUNCTION,
        SOURCE,
        SPACE,
        WAREHOUSE,
        WORKSPACE
    }
}

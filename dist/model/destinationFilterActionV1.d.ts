export declare class DestinationFilterActionV1 {
    'type': DestinationFilterActionV1.TypeEnum;
    'fields'?: {
        [key: string]: any;
    };
    'percent'?: number;
    'path'?: string;
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
export declare namespace DestinationFilterActionV1 {
    enum TypeEnum {
        ALLOW_PROPERTIES,
        DROP,
        DROP_PROPERTIES,
        SAMPLE
    }
}

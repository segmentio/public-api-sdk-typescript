export declare class HashPropertiesConfiguration {
    'algorithm': string;
    'key'?: string;
    'encoding'?: HashPropertiesConfiguration.EncodingEnum;
    'paths': Array<string>;
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
export declare namespace HashPropertiesConfiguration {
    enum EncodingEnum {
        BASE16,
        BASE64,
        BASE64URL,
        HEX
    }
}

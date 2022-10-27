export declare class DestinationMetadataMethodsV1 {
    'pageview'?: boolean;
    'identify'?: boolean;
    'alias'?: boolean;
    'track'?: boolean;
    'group'?: boolean;
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

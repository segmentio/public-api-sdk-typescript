export declare class SupportedMethods {
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

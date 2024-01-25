export declare class DestinationMetadataPlatformsV1 {
    'browser'?: boolean;
    'server'?: boolean;
    'mobile'?: boolean;
    'warehouse'?: boolean;
    'cloudAppObject'?: boolean;
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

export declare class CreateDestinationV1Input {
    'sourceId': string;
    'metadataId': string;
    'enabled'?: boolean;
    'name'?: string;
    'settings': {
        [key: string]: any;
    };
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

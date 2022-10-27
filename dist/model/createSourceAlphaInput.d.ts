export declare class CreateSourceAlphaInput {
    'slug': string;
    'enabled': boolean;
    'name'?: string;
    'metadataId': string;
    'settings'?: any;
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

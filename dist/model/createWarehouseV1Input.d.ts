export declare class CreateWarehouseV1Input {
    'metadataId': string;
    'name'?: string;
    'enabled'?: boolean;
    'settings': any | null;
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

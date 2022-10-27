export declare class UpdateSourceV1Input {
    'name'?: string;
    'enabled'?: boolean;
    'slug'?: string;
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

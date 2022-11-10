export declare class UpdateSourceAlphaInput {
    'name'?: string;
    'enabled'?: boolean;
    'slug'?: string;
    'settings'?: any | null;
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

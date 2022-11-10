export declare class UpdateWarehouseV1Input {
    'name'?: string | null;
    'enabled'?: boolean;
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

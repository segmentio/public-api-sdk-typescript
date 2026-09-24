export declare class WarehouseV2 {
    'id': string;
    'workspaceId': string;
    'name'?: string;
    'enabled': boolean;
    'credentialId': string;
    'settings': {
        [key: string]: any;
    };
    'createdAt': string | null;
    'updatedAt': string | null;
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

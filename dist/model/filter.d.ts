export declare class Filter {
    'id': string;
    'workspaceId': string;
    'integrationId': string;
    'enabled'?: boolean;
    'drop'?: boolean;
    'name': string;
    'description'?: string;
    'if': string;
    'productArea'?: string;
    'propertyDrops'?: Array<string>;
    'allowProperties'?: Array<string>;
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

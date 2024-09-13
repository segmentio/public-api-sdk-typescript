export declare class Filter {
    'id': string;
    'workspaceId': string;
    'integrationId': string;
    'enabled'?: boolean;
    'name'?: string;
    'description'?: string;
    'if'?: string;
    'drop'?: boolean;
    'dropProperties'?: Array<string>;
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

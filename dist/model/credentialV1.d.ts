export declare class CredentialV1 {
    'id': string;
    'workspaceId': string;
    'name': string;
    'settings': {
        [key: string]: any;
    };
    'createdAt': string;
    'updatedAt': string;
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

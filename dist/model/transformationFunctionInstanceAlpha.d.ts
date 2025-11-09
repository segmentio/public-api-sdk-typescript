export declare class TransformationFunctionInstanceAlpha {
    'id': string;
    'name'?: string;
    'integrationId': string;
    'classId': string;
    'enabled': boolean;
    'createdAt': string;
    'updatedAt': string;
    'settings': {
        [key: string]: any;
    };
    'encryptedSettings': {
        [key: string]: any;
    };
    'integrationType': string;
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

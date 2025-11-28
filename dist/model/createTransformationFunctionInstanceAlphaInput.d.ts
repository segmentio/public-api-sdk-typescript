export declare class CreateTransformationFunctionInstanceAlphaInput {
    'functionId': string;
    'integrationId': string;
    'integrationType': string;
    'enabled'?: boolean;
    'name': string;
    'settings': {
        [key: string]: any;
    };
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

export declare class UpdateTransformationFunctionInstanceAlphaInput {
    'instanceId': string;
    'enabled'?: boolean;
    'name'?: string;
    'integrationType'?: string;
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

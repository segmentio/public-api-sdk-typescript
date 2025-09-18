export declare class CreateInsertFunctionInstanceAlphaInput {
    'functionId': string;
    'integrationId': string;
    'enabled'?: boolean;
    'name': string;
    'settings': {
        [key: string]: any;
    };
    'integrationType': CreateInsertFunctionInstanceAlphaInput.IntegrationTypeEnum;
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
export declare namespace CreateInsertFunctionInstanceAlphaInput {
    enum IntegrationTypeEnum {
        DESTINATION,
        JOURNEY,
        SOURCE
    }
}

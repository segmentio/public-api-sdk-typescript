export declare class AddActivationToAudienceAlphaInput {
    'versionSchema': string;
    'workspaceId': string;
    'destinationId': string;
    'enabled'?: boolean;
    'hasEnabledResync'?: boolean;
    'emitEntityContext'?: string;
    'eventEmitter': any | null;
    'subscription': any | null;
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

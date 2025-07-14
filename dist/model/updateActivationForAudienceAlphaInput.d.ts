export declare class UpdateActivationForAudienceAlphaInput {
    'workspaceId': string;
    'enabled'?: boolean;
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

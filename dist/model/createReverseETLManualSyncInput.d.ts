export declare class CreateReverseETLManualSyncInput {
    'sourceId': string;
    'modelId': string;
    'subscriptionId': string;
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

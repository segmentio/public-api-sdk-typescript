export declare class CreateDestinationSubscriptionAlphaInput {
    'name': string;
    'actionId': string;
    'trigger': string;
    'enabled': boolean;
    'settings'?: {
        [key: string]: any;
    };
    'modelId'?: string;
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

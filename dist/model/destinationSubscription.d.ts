export declare class DestinationSubscription {
    'id': string;
    'name': string;
    'actionId': string;
    'actionSlug': string;
    'destinationId': string;
    'enabled': boolean;
    'settings': {
        [key: string]: any;
    };
    'trigger': string;
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

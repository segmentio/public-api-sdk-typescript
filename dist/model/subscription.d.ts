export declare class Subscription {
    'id': string;
    'name': string;
    'actionId': string;
    'actionSlug': string;
    'destinationId': string;
    'enabled': boolean;
    'settings': any | null;
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

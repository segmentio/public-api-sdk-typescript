export declare class DestinationMetadataSubscriptionPresetV1 {
    'actionId': string;
    'name': string;
    'fields': {
        [key: string]: any;
    };
    'trigger': string;
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

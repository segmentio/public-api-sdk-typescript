export declare class DeliveryOverviewSourceFilterBy {
    'discardReason'?: Array<string>;
    'eventName'?: Array<string>;
    'eventType'?: Array<string>;
    'appVersion'?: Array<string>;
    'activationId'?: Array<string>;
    'audienceId'?: Array<string>;
    'spaceId'?: Array<string>;
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

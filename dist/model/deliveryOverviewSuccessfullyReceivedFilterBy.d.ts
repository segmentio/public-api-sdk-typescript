export declare class DeliveryOverviewSuccessfullyReceivedFilterBy {
    'eventName'?: Array<string>;
    'eventType'?: Array<string>;
    'appVersion'?: Array<string>;
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

export declare class DeliveryOverviewAudienceFilterBy {
    'eventName'?: Array<string>;
    'eventType'?: Array<string>;
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

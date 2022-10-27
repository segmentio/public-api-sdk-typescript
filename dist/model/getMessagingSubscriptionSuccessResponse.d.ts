export declare class GetMessagingSubscriptionSuccessResponse {
    'key': string;
    'type': GetMessagingSubscriptionSuccessResponse.TypeEnum;
    'status'?: GetMessagingSubscriptionSuccessResponse.StatusEnum;
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
export declare namespace GetMessagingSubscriptionSuccessResponse {
    enum TypeEnum {
        EMAIL,
        SMS
    }
    enum StatusEnum {
        DID_NOT_SUBSCRIBE,
        SUBSCRIBED,
        UNSUBSCRIBED
    }
}

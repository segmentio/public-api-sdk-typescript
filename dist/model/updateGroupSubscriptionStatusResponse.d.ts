export declare class UpdateGroupSubscriptionStatusResponse {
    'name': string;
    'status': UpdateGroupSubscriptionStatusResponse.StatusEnum;
    'id': string;
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
export declare namespace UpdateGroupSubscriptionStatusResponse {
    enum StatusEnum {
        DID_NOT_SUBSCRIBE,
        SUBSCRIBED,
        UNSUBSCRIBED
    }
}

export declare class GroupSubscriptionStatusResponse {
    'name': string;
    'status': GroupSubscriptionStatusResponse.StatusEnum;
    'id': string;
    'updatedAt'?: string;
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
export declare namespace GroupSubscriptionStatusResponse {
    enum StatusEnum {
        DID_NOT_SUBSCRIBE,
        SUBSCRIBED,
        UNSUBSCRIBED
    }
}

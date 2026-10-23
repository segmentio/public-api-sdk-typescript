import { GroupSubscriptionStatusResponse } from './groupSubscriptionStatusResponse';
export declare class GetMessagingSubscriptionSuccessResponse {
    'key': string;
    'type': GetMessagingSubscriptionSuccessResponse.TypeEnum;
    'status'?: GetMessagingSubscriptionSuccessResponse.StatusEnum;
    'groups'?: Array<GroupSubscriptionStatusResponse>;
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
export declare namespace GetMessagingSubscriptionSuccessResponse {
    enum TypeEnum {
        ANDROID_PUSH,
        EMAIL,
        IOS_PUSH,
        SMS,
        WHATSAPP
    }
    enum StatusEnum {
        DID_NOT_SUBSCRIBE,
        SUBSCRIBED,
        UNSUBSCRIBED
    }
}

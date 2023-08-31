import { GroupSubscriptionStatus } from './groupSubscriptionStatus';
export declare class MessagesSubscriptionRequest {
    'key': string;
    'type': MessagesSubscriptionRequest.TypeEnum;
    'status'?: MessagesSubscriptionRequest.StatusEnum;
    'groups'?: Array<GroupSubscriptionStatus>;
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
export declare namespace MessagesSubscriptionRequest {
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

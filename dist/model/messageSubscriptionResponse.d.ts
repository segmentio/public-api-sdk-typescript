import { MessageSubscriptionResponseError } from './messageSubscriptionResponseError';
import { UpdateGroupSubscriptionStatusResponse } from './updateGroupSubscriptionStatusResponse';
export declare class MessageSubscriptionResponse {
    'key': string;
    'type': MessageSubscriptionResponse.TypeEnum;
    'status'?: MessageSubscriptionResponse.StatusEnum;
    'errors'?: Array<MessageSubscriptionResponseError>;
    'groups'?: Array<UpdateGroupSubscriptionStatusResponse>;
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
export declare namespace MessageSubscriptionResponse {
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

import { MessageSubscriptionResponseError } from './messageSubscriptionResponseError';
export declare class MessageSubscriptionResponse {
    'key': string;
    'type': MessageSubscriptionResponse.TypeEnum;
    'status': MessageSubscriptionResponse.StatusEnum;
    'errors'?: Array<MessageSubscriptionResponseError>;
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
        EMAIL,
        SMS
    }
    enum StatusEnum {
        DID_NOT_SUBSCRIBE,
        SUBSCRIBED,
        UNSUBSCRIBED
    }
}

import { MessageSubscriptionResponseError } from './messageSubscriptionResponseError';
export declare class GetMessagingSubscriptionFailureResponse {
    'key': string;
    'type': string;
    'errors': Array<MessageSubscriptionResponseError>;
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

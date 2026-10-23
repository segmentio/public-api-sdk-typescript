import { MessagesSubscriptionRequest } from './messagesSubscriptionRequest';
export declare class ReplaceMessagingSubscriptionsInSpacesAlphaInput {
    'subscriptions': Array<MessagesSubscriptionRequest>;
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

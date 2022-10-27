import { MessageSubscriptionResponse } from './messageSubscriptionResponse';
import { Pagination } from './pagination';
export declare class ReplaceMessagingSubscriptionsInSpacesAlphaOutput {
    'successes': Array<MessageSubscriptionResponse>;
    'failures': Array<MessageSubscriptionResponse>;
    'pagination'?: Pagination;
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

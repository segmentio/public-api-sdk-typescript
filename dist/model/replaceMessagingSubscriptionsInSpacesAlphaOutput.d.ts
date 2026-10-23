import { MessageSubscriptionResponse } from './messageSubscriptionResponse';
import { PaginationOutput } from './paginationOutput';
export declare class ReplaceMessagingSubscriptionsInSpacesAlphaOutput {
    'successes': Array<MessageSubscriptionResponse>;
    'failures': Array<MessageSubscriptionResponse>;
    'pagination'?: PaginationOutput;
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

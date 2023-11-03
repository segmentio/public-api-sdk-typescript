import { GetMessagingSubscriptionFailureResponse } from './getMessagingSubscriptionFailureResponse';
import { GetMessagingSubscriptionSuccessResponse } from './getMessagingSubscriptionSuccessResponse';
import { MessageSubscriptionResponseError } from './messageSubscriptionResponseError';
import { PaginationOutput } from './paginationOutput';
export declare class BatchQueryMessagingSubscriptionsForSpaceAlphaOutput {
    'successes': Array<GetMessagingSubscriptionSuccessResponse>;
    'failures': Array<GetMessagingSubscriptionFailureResponse>;
    'errors': Array<MessageSubscriptionResponseError>;
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

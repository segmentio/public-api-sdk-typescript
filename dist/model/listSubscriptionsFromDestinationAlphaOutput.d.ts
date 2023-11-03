import { DestinationSubscription } from './destinationSubscription';
import { PaginationOutput } from './paginationOutput';
export declare class ListSubscriptionsFromDestinationAlphaOutput {
    'subscriptions': Array<DestinationSubscription>;
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

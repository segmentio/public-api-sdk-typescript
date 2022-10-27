import { DestinationSubscription } from './destinationSubscription';
import { Pagination } from './pagination';
export declare class ListSubscriptionsFromDestinationAlphaOutput {
    'subscriptions': Array<DestinationSubscription>;
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

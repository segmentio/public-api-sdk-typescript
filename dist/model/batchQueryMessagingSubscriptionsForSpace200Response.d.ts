import { BatchQueryMessagingSubscriptionsForSpaceAlphaOutput } from './batchQueryMessagingSubscriptionsForSpaceAlphaOutput';
export declare class BatchQueryMessagingSubscriptionsForSpace200Response {
    'data'?: BatchQueryMessagingSubscriptionsForSpaceAlphaOutput;
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

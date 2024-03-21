import { DeliveryOverviewMetricsDatapoint } from './deliveryOverviewMetricsDatapoint';
export declare class DeliveryOverviewMetricsDataset {
    'eventName'?: string;
    'appVersion'?: string;
    'eventType'?: string;
    'discardReason'?: string;
    'total': number;
    'series': Array<DeliveryOverviewMetricsDatapoint>;
    'totalRetryCount'?: number;
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

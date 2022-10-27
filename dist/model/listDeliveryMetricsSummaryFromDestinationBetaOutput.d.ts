import { DeliveryMetricsSummary } from './deliveryMetricsSummary';
export declare class ListDeliveryMetricsSummaryFromDestinationBetaOutput {
    'deliveryMetricsSummary': DeliveryMetricsSummary;
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

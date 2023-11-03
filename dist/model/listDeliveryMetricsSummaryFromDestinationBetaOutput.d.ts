import { DeliveryMetricsSummaryBeta } from './deliveryMetricsSummaryBeta';
export declare class ListDeliveryMetricsSummaryFromDestinationBetaOutput {
    'deliveryMetricsSummary': DeliveryMetricsSummaryBeta;
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

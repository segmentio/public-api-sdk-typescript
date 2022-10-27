import { MetricBeta } from './metricBeta';
export declare class DeliveryMetricsSummaryBeta {
    'sourceId': string;
    'destinationMetadataId': string;
    'metrics': Array<MetricBeta>;
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

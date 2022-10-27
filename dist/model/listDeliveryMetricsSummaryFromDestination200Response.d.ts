import { ListDeliveryMetricsSummaryFromDestinationBetaOutput } from './listDeliveryMetricsSummaryFromDestinationBetaOutput';
export declare class ListDeliveryMetricsSummaryFromDestination200Response {
    'data'?: ListDeliveryMetricsSummaryFromDestinationBetaOutput;
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

import { GetDeliveryOverviewMetricsAlphaOutput } from './getDeliveryOverviewMetricsAlphaOutput';
export declare class GetEgressFailedMetricsFromDeliveryOverview200Response {
    'data'?: GetDeliveryOverviewMetricsAlphaOutput;
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

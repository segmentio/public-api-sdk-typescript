import { DeliveryOverviewFilterBy } from './deliveryOverviewFilterBy';
import { PaginationInput } from './paginationInput';
export declare class GetDeliveryOverviewDestMetricsBetaInput {
    'sourceId': string;
    'destinationConfigId': string;
    'startTime': string;
    'endTime': string;
    'groupBy'?: Array<string>;
    'granularity': GetDeliveryOverviewDestMetricsBetaInput.GranularityEnum;
    'filter'?: DeliveryOverviewFilterBy;
    'pagination': PaginationInput;
    'subscriptionId'?: string;
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
export declare namespace GetDeliveryOverviewDestMetricsBetaInput {
    enum GranularityEnum {
        day,
        hour,
        minute
    }
}

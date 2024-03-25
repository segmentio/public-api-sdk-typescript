import { DeliveryOverviewFilterBy } from './deliveryOverviewFilterBy';
import { PaginationInput } from './paginationInput';
export declare class GetDeliveryOverviewSourceMetricsBetaInput {
    'sourceId': string;
    'destinationConfigId'?: string;
    'startTime': string;
    'endTime': string;
    'groupBy'?: Array<string>;
    'granularity': GetDeliveryOverviewSourceMetricsBetaInput.GranularityEnum;
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
export declare namespace GetDeliveryOverviewSourceMetricsBetaInput {
    enum GranularityEnum {
        day,
        hour,
        minute
    }
}

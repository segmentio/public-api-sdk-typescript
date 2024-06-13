import { DeliveryOverviewAudienceFilterBy } from './deliveryOverviewAudienceFilterBy';
import { PaginationInput } from './paginationInput';
export declare class GetDeliveryOverviewLinkedAudienceSuccessBetaInput {
    'sourceId': string;
    'destinationConfigId': string;
    'startTime': string;
    'endTime': string;
    'groupBy'?: Array<string>;
    'granularity': GetDeliveryOverviewLinkedAudienceSuccessBetaInput.GranularityEnum;
    'filter'?: DeliveryOverviewAudienceFilterBy;
    'pagination'?: PaginationInput;
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
export declare namespace GetDeliveryOverviewLinkedAudienceSuccessBetaInput {
    enum GranularityEnum {
        DAY,
        HOUR,
        MINUTE
    }
}

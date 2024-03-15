import { DeliveryOverviewMetricsDataset } from './deliveryOverviewMetricsDataset';
import { PaginationOutput } from './paginationOutput';
export declare class GetDeliveryOverviewMetricsAlphaOutput {
    'total': number;
    'dataset': Array<DeliveryOverviewMetricsDataset>;
    'pagination': PaginationOutput;
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

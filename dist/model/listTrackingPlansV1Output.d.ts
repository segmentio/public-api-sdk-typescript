import { PaginationOutput } from './paginationOutput';
import { TrackingPlanV1 } from './trackingPlanV1';
export declare class ListTrackingPlansV1Output {
    'trackingPlans': Array<TrackingPlanV1>;
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

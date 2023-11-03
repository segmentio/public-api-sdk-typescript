import { TrackingPlanV1 } from './trackingPlanV1';
export declare class CreateTrackingPlanV1Output {
    'trackingPlan': TrackingPlanV1;
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

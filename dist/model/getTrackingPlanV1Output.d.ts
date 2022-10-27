import { TrackingPlan } from './trackingPlan';
export declare class GetTrackingPlanV1Output {
    'trackingPlan': TrackingPlan;
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

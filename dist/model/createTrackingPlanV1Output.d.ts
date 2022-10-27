import { TrackingPlan1 } from './trackingPlan1';
export declare class CreateTrackingPlanV1Output {
    'trackingPlan': TrackingPlan1;
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

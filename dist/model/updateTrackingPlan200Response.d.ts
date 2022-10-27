import { UpdateTrackingPlanV1Output } from './updateTrackingPlanV1Output';
export declare class UpdateTrackingPlan200Response {
    'data'?: UpdateTrackingPlanV1Output;
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

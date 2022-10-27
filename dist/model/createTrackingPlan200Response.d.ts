import { CreateTrackingPlanV1Output } from './createTrackingPlanV1Output';
export declare class CreateTrackingPlan200Response {
    'data'?: CreateTrackingPlanV1Output;
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

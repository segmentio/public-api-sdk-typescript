import { DeleteTrackingPlanV1Output } from './deleteTrackingPlanV1Output';
export declare class DeleteTrackingPlan200Response {
    'data'?: DeleteTrackingPlanV1Output;
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

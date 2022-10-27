import { UpdateRulesInTrackingPlanV1Output } from './updateRulesInTrackingPlanV1Output';
export declare class UpdateRulesInTrackingPlan200Response {
    'data'?: UpdateRulesInTrackingPlanV1Output;
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

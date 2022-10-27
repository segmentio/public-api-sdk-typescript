import { RemoveRulesFromTrackingPlanV1Output } from './removeRulesFromTrackingPlanV1Output';
export declare class RemoveRulesFromTrackingPlan200Response {
    'data'?: RemoveRulesFromTrackingPlanV1Output;
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

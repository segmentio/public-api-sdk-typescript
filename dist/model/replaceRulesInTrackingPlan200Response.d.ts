import { ReplaceRulesInTrackingPlanV1Output } from './replaceRulesInTrackingPlanV1Output';
export declare class ReplaceRulesInTrackingPlan200Response {
    'data'?: ReplaceRulesInTrackingPlanV1Output;
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

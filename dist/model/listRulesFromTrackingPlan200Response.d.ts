import { ListRulesFromTrackingPlanV1Output } from './listRulesFromTrackingPlanV1Output';
export declare class ListRulesFromTrackingPlan200Response {
    'data'?: ListRulesFromTrackingPlanV1Output;
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

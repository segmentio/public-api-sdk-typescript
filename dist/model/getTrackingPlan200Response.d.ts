import { GetTrackingPlanV1Output } from './getTrackingPlanV1Output';
export declare class GetTrackingPlan200Response {
    'data'?: GetTrackingPlanV1Output;
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

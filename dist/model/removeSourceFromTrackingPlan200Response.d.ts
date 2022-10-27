import { RemoveSourceFromTrackingPlanV1Output } from './removeSourceFromTrackingPlanV1Output';
export declare class RemoveSourceFromTrackingPlan200Response {
    'data'?: RemoveSourceFromTrackingPlanV1Output;
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

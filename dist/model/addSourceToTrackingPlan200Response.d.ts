import { AddSourceToTrackingPlanV1Output } from './addSourceToTrackingPlanV1Output';
export declare class AddSourceToTrackingPlan200Response {
    'data'?: AddSourceToTrackingPlanV1Output;
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

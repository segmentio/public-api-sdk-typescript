import { ListSourcesFromTrackingPlanV1Output } from './listSourcesFromTrackingPlanV1Output';
export declare class ListSourcesFromTrackingPlan200Response {
    'data'?: ListSourcesFromTrackingPlanV1Output;
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

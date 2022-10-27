import { ListTrackingPlansV1Output } from './listTrackingPlansV1Output';
export declare class ListTrackingPlans200Response {
    'data'?: ListTrackingPlansV1Output;
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

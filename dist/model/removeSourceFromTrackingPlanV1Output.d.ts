export declare class RemoveSourceFromTrackingPlanV1Output {
    'status': RemoveSourceFromTrackingPlanV1Output.StatusEnum;
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
export declare namespace RemoveSourceFromTrackingPlanV1Output {
    enum StatusEnum {
        SUCCESS
    }
}

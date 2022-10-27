export declare class AddSourceToTrackingPlanV1Output {
    'status': AddSourceToTrackingPlanV1Output.StatusEnum;
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
export declare namespace AddSourceToTrackingPlanV1Output {
    enum StatusEnum {
        SUCCESS
    }
}

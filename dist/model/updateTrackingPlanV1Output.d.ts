export declare class UpdateTrackingPlanV1Output {
    'status': UpdateTrackingPlanV1Output.StatusEnum;
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
export declare namespace UpdateTrackingPlanV1Output {
    enum StatusEnum {
        SUCCESS
    }
}

export declare class RemoveRulesFromTrackingPlanV1Output {
    'status': RemoveRulesFromTrackingPlanV1Output.StatusEnum;
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
export declare namespace RemoveRulesFromTrackingPlanV1Output {
    enum StatusEnum {
        SUCCESS
    }
}

export declare class UpdateRulesInTrackingPlanV1Output {
    'status': UpdateRulesInTrackingPlanV1Output.StatusEnum;
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
export declare namespace UpdateRulesInTrackingPlanV1Output {
    enum StatusEnum {
        SUCCESS
    }
}

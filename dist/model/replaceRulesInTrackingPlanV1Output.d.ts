export declare class ReplaceRulesInTrackingPlanV1Output {
    'status': ReplaceRulesInTrackingPlanV1Output.StatusEnum;
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
export declare namespace ReplaceRulesInTrackingPlanV1Output {
    enum StatusEnum {
        SUCCESS
    }
}

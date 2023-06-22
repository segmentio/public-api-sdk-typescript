export declare class CreateTrackingPlanV1Input {
    'name': string;
    'description'?: string;
    'type': CreateTrackingPlanV1Input.TypeEnum;
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
export declare namespace CreateTrackingPlanV1Input {
    enum TypeEnum {
        LIVE,
        PROPERTY_LIBRARY,
        RULE_LIBRARY,
        TEMPLATE
    }
}

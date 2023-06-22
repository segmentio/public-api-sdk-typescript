export declare class TrackingPlanV1 {
    'id': string;
    'name'?: string;
    'slug'?: string;
    'description'?: string;
    'type': TrackingPlanV1.TypeEnum;
    'updatedAt'?: string;
    'createdAt'?: string;
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
export declare namespace TrackingPlanV1 {
    enum TypeEnum {
        LIVE,
        PROPERTY_LIBRARY,
        RULE_LIBRARY,
        TEMPLATE
    }
}

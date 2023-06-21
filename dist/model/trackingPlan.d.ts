export declare class TrackingPlan {
    'id': string;
    'name'?: string;
    'slug'?: string;
    'description'?: string;
    'type': TrackingPlan.TypeEnum;
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
export declare namespace TrackingPlan {
    enum TypeEnum {
        ENGAGE,
        LIVE,
        PROPERTY_LIBRARY,
        RULE_LIBRARY,
        TEMPLATE
    }
}

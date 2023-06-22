export declare class TrackingPlan1 {
    'id': string;
    'name'?: string;
    'slug'?: string;
    'description'?: string;
    'type': TrackingPlan1.TypeEnum;
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
export declare namespace TrackingPlan1 {
    enum TypeEnum {
        LIVE,
        PROPERTY_LIBRARY,
        RULE_LIBRARY,
        TEMPLATE
    }
}

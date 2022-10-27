export declare class Group {
    'allowUnplannedTraits'?: boolean;
    'allowTraitsOnViolations'?: boolean;
    'commonEventOnViolations'?: Group.CommonEventOnViolationsEnum;
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
export declare namespace Group {
    enum CommonEventOnViolationsEnum {
        ALLOW,
        BLOCK,
        OMIT_TRAITS
    }
}

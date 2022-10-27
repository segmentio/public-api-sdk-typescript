export declare class GroupSourceSettingsV1 {
    'allowUnplannedTraits'?: boolean;
    'allowTraitsOnViolations'?: boolean;
    'commonEventOnViolations'?: GroupSourceSettingsV1.CommonEventOnViolationsEnum;
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
export declare namespace GroupSourceSettingsV1 {
    enum CommonEventOnViolationsEnum {
        ALLOW,
        BLOCK,
        OMIT_TRAITS
    }
}

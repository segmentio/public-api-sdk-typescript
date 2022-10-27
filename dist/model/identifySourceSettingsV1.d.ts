export declare class IdentifySourceSettingsV1 {
    'allowUnplannedTraits'?: boolean;
    'allowTraitsOnViolations'?: boolean;
    'commonEventOnViolations'?: IdentifySourceSettingsV1.CommonEventOnViolationsEnum;
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
export declare namespace IdentifySourceSettingsV1 {
    enum CommonEventOnViolationsEnum {
        ALLOW,
        BLOCK,
        OMIT_TRAITS
    }
}

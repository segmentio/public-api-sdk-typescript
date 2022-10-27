export declare class TrackSourceSettingsV1 {
    'allowUnplannedEvents'?: boolean;
    'allowUnplannedEventProperties'?: boolean;
    'allowEventOnViolations'?: boolean;
    'allowPropertiesOnViolations'?: boolean;
    'commonEventOnViolations'?: TrackSourceSettingsV1.CommonEventOnViolationsEnum;
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
export declare namespace TrackSourceSettingsV1 {
    enum CommonEventOnViolationsEnum {
        ALLOW,
        BLOCK,
        OMIT_PROPERTIES
    }
}

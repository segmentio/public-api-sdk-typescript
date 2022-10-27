export declare class Track {
    'allowUnplannedEvents'?: boolean;
    'allowUnplannedEventProperties'?: boolean;
    'allowEventOnViolations'?: boolean;
    'allowPropertiesOnViolations'?: boolean;
    'commonEventOnViolations'?: Track.CommonEventOnViolationsEnum;
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
export declare namespace Track {
    enum CommonEventOnViolationsEnum {
        ALLOW,
        BLOCK,
        OMIT_PROPERTIES
    }
}

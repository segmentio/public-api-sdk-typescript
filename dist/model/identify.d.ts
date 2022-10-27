export declare class Identify {
    'allowUnplannedTraits'?: boolean;
    'allowTraitsOnViolations'?: boolean;
    'commonEventOnViolations'?: Identify.CommonEventOnViolationsEnum;
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
export declare namespace Identify {
    enum CommonEventOnViolationsEnum {
        ALLOW,
        BLOCK,
        OMIT_TRAITS
    }
}

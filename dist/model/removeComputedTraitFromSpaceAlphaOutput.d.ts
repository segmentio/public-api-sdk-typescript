export declare class RemoveComputedTraitFromSpaceAlphaOutput {
    'status': RemoveComputedTraitFromSpaceAlphaOutput.StatusEnum;
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
export declare namespace RemoveComputedTraitFromSpaceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}

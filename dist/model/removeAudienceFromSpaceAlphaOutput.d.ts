export declare class RemoveAudienceFromSpaceAlphaOutput {
    'status': RemoveAudienceFromSpaceAlphaOutput.StatusEnum;
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
export declare namespace RemoveAudienceFromSpaceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}

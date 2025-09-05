export declare class RemoveAudienceFromSpaceBetaOutput {
    'status': RemoveAudienceFromSpaceBetaOutput.StatusEnum;
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
export declare namespace RemoveAudienceFromSpaceBetaOutput {
    enum StatusEnum {
        SUCCESS
    }
}

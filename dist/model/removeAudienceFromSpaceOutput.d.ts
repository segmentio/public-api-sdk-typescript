export declare class RemoveAudienceFromSpaceOutput {
    'status': RemoveAudienceFromSpaceOutput.StatusEnum;
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
export declare namespace RemoveAudienceFromSpaceOutput {
    enum StatusEnum {
        SUCCESS
    }
}

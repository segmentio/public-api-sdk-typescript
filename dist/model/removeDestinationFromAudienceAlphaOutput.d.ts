export declare class RemoveDestinationFromAudienceAlphaOutput {
    'status': RemoveDestinationFromAudienceAlphaOutput.StatusEnum;
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
export declare namespace RemoveDestinationFromAudienceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}

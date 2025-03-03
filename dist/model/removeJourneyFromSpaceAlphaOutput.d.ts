export declare class RemoveJourneyFromSpaceAlphaOutput {
    'status': RemoveJourneyFromSpaceAlphaOutput.StatusEnum;
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
export declare namespace RemoveJourneyFromSpaceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}

export declare class RemoveAudienceScheduleFromAudienceAlphaOutput {
    'status': RemoveAudienceScheduleFromAudienceAlphaOutput.StatusEnum;
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
export declare namespace RemoveAudienceScheduleFromAudienceAlphaOutput {
    enum StatusEnum {
        SUCCESS
    }
}

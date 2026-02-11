export declare class RemoveAudienceScheduleFromAudienceOutput {
    'status': RemoveAudienceScheduleFromAudienceOutput.StatusEnum;
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
export declare namespace RemoveAudienceScheduleFromAudienceOutput {
    enum StatusEnum {
        SUCCESS
    }
}

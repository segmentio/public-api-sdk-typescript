export declare class UpdateStatusForJourneyAlphaOutput {
    'containerId': string;
    'version': number;
    'status': UpdateStatusForJourneyAlphaOutput.StatusEnum;
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
export declare namespace UpdateStatusForJourneyAlphaOutput {
    enum StatusEnum {
        ARCHIVED,
        ENTRY_PAUSED,
        PUBLISHED
    }
}

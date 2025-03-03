export declare class UpdateStatusForJourneyAlphaInput {
    'version': number;
    'action': UpdateStatusForJourneyAlphaInput.ActionEnum;
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
export declare namespace UpdateStatusForJourneyAlphaInput {
    enum ActionEnum {
        ARCHIVE,
        PAUSE_ENTRY,
        PUBLISH
    }
}

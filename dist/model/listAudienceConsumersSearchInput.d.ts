export declare class ListAudienceConsumersSearchInput {
    'type': ListAudienceConsumersSearchInput.TypeEnum;
    'query': string;
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
export declare namespace ListAudienceConsumersSearchInput {
    enum TypeEnum {
        DEFINITION,
        NAME
    }
}

export declare class ListAudienceSearchInput {
    'type': ListAudienceSearchInput.TypeEnum;
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
export declare namespace ListAudienceSearchInput {
    enum TypeEnum {
        DEFINITION,
        KEY,
        NAME
    }
}

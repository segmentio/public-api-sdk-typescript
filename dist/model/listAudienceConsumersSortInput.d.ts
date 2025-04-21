export declare class ListAudienceConsumersSortInput {
    'field': ListAudienceConsumersSortInput.FieldEnum;
    'direction': ListAudienceConsumersSortInput.DirectionEnum;
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
export declare namespace ListAudienceConsumersSortInput {
    enum FieldEnum {
        CREATED_AT,
        NAME,
        UPDATED_AT
    }
    enum DirectionEnum {
        ASC,
        DESC
    }
}

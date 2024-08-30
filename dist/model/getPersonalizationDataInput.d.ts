export declare class GetPersonalizationDataInput {
    'spaceId': string;
    'entityType': string;
    'entityId': string;
    'childEntityType'?: string;
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

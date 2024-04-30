export declare class ListFunctionItemV1 {
    'id'?: string;
    'resourceType'?: ListFunctionItemV1.ResourceTypeEnum;
    'createdAt'?: string;
    'createdBy'?: string;
    'displayName'?: string;
    'description'?: string;
    'logoUrl'?: string;
    'catalogId'?: string;
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
export declare namespace ListFunctionItemV1 {
    enum ResourceTypeEnum {
        DESTINATION,
        INSERT_DESTINATION,
        INSERT_SOURCE,
        SOURCE
    }
}

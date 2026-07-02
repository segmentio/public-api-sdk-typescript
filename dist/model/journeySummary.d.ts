export declare class JourneySummary {
    'id': string;
    'spaceId': string;
    'name': string;
    'executionState': JourneySummary.ExecutionStateEnum;
    'createdAt': string;
    'updatedAt': string;
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
export declare namespace JourneySummary {
    enum ExecutionStateEnum {
        DRAFT,
        PUBLISHED
    }
}

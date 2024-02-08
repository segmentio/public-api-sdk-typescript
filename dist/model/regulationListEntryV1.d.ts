export declare class RegulationListEntryV1 {
    'id': string;
    'subjectType': string;
    'subjects': Array<string>;
    'status': RegulationListEntryV1.StatusEnum;
    'createdAt': string;
    'regulationType': RegulationListEntryV1.RegulationTypeEnum;
    'finishedAt'?: string;
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
export declare namespace RegulationListEntryV1 {
    enum StatusEnum {
        FAILED,
        FINISHED,
        INITIALIZED,
        INVALID,
        NOT_SUPPORTED,
        PARTIAL_SUCCESS,
        RUNNING
    }
    enum RegulationTypeEnum {
        DELETE_INTERNAL,
        DELETE_ONLY,
        SUPPRESS_ONLY,
        SUPPRESS_WITH_DELETE,
        UNSUPPRESS
    }
}

export declare class CreateWorkspaceRegulationV1Input {
    'regulationType': CreateWorkspaceRegulationV1Input.RegulationTypeEnum;
    'subjectType': CreateWorkspaceRegulationV1Input.SubjectTypeEnum;
    'subjectIds': Array<string>;
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
export declare namespace CreateWorkspaceRegulationV1Input {
    enum RegulationTypeEnum {
        DELETE_INTERNAL,
        DELETE_ONLY,
        SUPPRESS_ONLY,
        SUPPRESS_WITH_DELETE,
        SUPPRESS_WITH_DELETE_INTERNAL,
        UNSUPPRESS
    }
    enum SubjectTypeEnum {
        OBJECT_ID,
        USER_ID
    }
}

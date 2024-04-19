export declare class CreateSourceRegulationV1Input {
    'regulationType': CreateSourceRegulationV1Input.RegulationTypeEnum;
    'subjectType': CreateSourceRegulationV1Input.SubjectTypeEnum;
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
export declare namespace CreateSourceRegulationV1Input {
    enum RegulationTypeEnum {
        DELETE_INTERNAL,
        DELETE_ONLY,
        SUPPRESS_ONLY,
        SUPPRESS_WITH_DELETE,
        SUPPRESS_WITH_DELETE_INTERNAL,
        UNSUPPRESS
    }
    enum SubjectTypeEnum {
        USER_ID
    }
}

export declare class CreateCloudSourceRegulationV1Input {
    'regulationType': CreateCloudSourceRegulationV1Input.RegulationTypeEnum;
    'subjectType': CreateCloudSourceRegulationV1Input.SubjectTypeEnum;
    'subjectIds': Array<string>;
    'collection': string;
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
export declare namespace CreateCloudSourceRegulationV1Input {
    enum RegulationTypeEnum {
        DELETE_INTERNAL,
        DELETE_ONLY,
        SUPPRESS_ONLY,
        SUPPRESS_WITH_DELETE,
        UNSUPPRESS
    }
    enum SubjectTypeEnum {
        OBJECT_ID
    }
}

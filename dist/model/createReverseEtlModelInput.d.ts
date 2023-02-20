export declare class CreateReverseEtlModelInput {
    'sourceId': string;
    'name': string;
    'description': string;
    'enabled': boolean;
    'scheduleStrategy': CreateReverseEtlModelInput.ScheduleStrategyEnum;
    'scheduleConfig': any | null;
    'query': string;
    'queryIdentifierColumn': string;
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
export declare namespace CreateReverseEtlModelInput {
    enum ScheduleStrategyEnum {
        MANUAL,
        PERIODIC,
        SPECIFIC_DAYS
    }
}

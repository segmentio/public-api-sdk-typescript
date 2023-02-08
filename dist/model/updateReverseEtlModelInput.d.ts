export declare class UpdateReverseEtlModelInput {
    'name'?: string;
    'description'?: string;
    'enabled'?: boolean;
    'scheduleStrategy'?: UpdateReverseEtlModelInput.ScheduleStrategyEnum;
    'scheduleConfig'?: any | null;
    'query'?: string;
    'queryIdentifierColumn'?: string;
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
export declare namespace UpdateReverseEtlModelInput {
    enum ScheduleStrategyEnum {
        MANUAL,
        PERIODIC,
        SPECIFIC_DAYS
    }
}

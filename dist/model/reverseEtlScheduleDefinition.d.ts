import { Config1 } from './config1';
export declare class ReverseEtlScheduleDefinition {
    'strategy': ReverseEtlScheduleDefinition.StrategyEnum;
    'config'?: Config1 | null;
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
export declare namespace ReverseEtlScheduleDefinition {
    enum StrategyEnum {
        CRON,
        DBT_CLOUD,
        MANUAL,
        PERIODIC,
        SPECIFIC_DAYS
    }
}

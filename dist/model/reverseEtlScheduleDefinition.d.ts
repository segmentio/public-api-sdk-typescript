import { Config } from './config';
export declare class ReverseEtlScheduleDefinition {
    'strategy': ReverseEtlScheduleDefinition.StrategyEnum;
    'config'?: Config | null;
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

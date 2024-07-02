import { ReverseEtlScheduleConfig } from './reverseEtlScheduleConfig';
export declare class ReverseEtlScheduleDefinition {
    'strategy': ReverseEtlScheduleDefinition.StrategyEnum;
    'config': ReverseEtlScheduleConfig;
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
        MANUAL,
        PERIODIC,
        SPECIFIC_DAYS
    }
}

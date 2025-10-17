import { Config } from './config';
export declare class AudienceSchedule {
    'id': string;
    'strategy': AudienceSchedule.StrategyEnum;
    'config': Config | null;
    'nextExecution'?: string;
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
export declare namespace AudienceSchedule {
    enum StrategyEnum {
        PERIODIC,
        SPECIFIC_DAYS
    }
}

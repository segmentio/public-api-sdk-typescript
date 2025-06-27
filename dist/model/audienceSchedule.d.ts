import { Config } from './config';
export declare class AudienceSchedule {
    'id': string;
    'strategy': AudienceSchedule.StrategyEnum;
    'config'?: Config | null;
    'enabled': boolean;
    'nextExecution': string;
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
        MANUAL,
        PERIODIC,
        SPECIFIC_DAYS
    }
}

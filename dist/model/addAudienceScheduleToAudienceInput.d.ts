import { Config } from './config';
export declare class AddAudienceScheduleToAudienceInput {
    'strategy': AddAudienceScheduleToAudienceInput.StrategyEnum;
    'config': Config | null;
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
export declare namespace AddAudienceScheduleToAudienceInput {
    enum StrategyEnum {
        PERIODIC,
        SPECIFIC_DAYS
    }
}

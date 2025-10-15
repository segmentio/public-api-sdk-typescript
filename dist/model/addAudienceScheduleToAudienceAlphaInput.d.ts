import { Config } from './config';
export declare class AddAudienceScheduleToAudienceAlphaInput {
    'strategy': AddAudienceScheduleToAudienceAlphaInput.StrategyEnum;
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
export declare namespace AddAudienceScheduleToAudienceAlphaInput {
    enum StrategyEnum {
        PERIODIC,
        SPECIFIC_DAYS
    }
}

import { StepLevelAnalytics } from './stepLevelAnalytics';
import { TopLevelAnalytics } from './topLevelAnalytics';
export declare class JourneyAnalytics {
    'topLevelAnalytics': TopLevelAnalytics;
    'stepLevelAnalytics': Array<StepLevelAnalytics>;
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

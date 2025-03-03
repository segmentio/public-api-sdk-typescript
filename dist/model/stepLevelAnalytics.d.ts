import { Analytics } from './analytics';
import { Key } from './key';
export declare class StepLevelAnalytics {
    'from'?: Key;
    'to': Key;
    'analytics': Analytics;
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

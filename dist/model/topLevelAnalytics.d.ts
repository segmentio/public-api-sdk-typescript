import { Analytics } from './analytics';
export declare class TopLevelAnalytics {
    'entered': Analytics;
    'completed': Analytics;
    'inProgress': Analytics;
    'exited'?: Analytics;
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

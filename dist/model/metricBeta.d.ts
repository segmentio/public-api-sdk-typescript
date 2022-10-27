import { BreakdownBeta } from './breakdownBeta';
export declare class MetricBeta {
    'metricName': string;
    'total': number;
    'breakdown'?: Array<BreakdownBeta>;
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

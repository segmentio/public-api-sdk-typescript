import { GetDailyPerSourceMTUUsageV1Output } from './getDailyPerSourceMTUUsageV1Output';
export declare class GetDailyPerSourceMTUUsage200Response {
    'data'?: GetDailyPerSourceMTUUsageV1Output;
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

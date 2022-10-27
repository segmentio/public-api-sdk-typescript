import { GetDailyPerSourceAPICallsUsageV1Output } from './getDailyPerSourceAPICallsUsageV1Output';
export declare class GetDailyPerSourceAPICallsUsage200Response {
    'data'?: GetDailyPerSourceAPICallsUsageV1Output;
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

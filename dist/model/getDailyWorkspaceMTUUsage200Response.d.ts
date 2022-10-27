import { GetDailyWorkspaceMTUUsageV1Output } from './getDailyWorkspaceMTUUsageV1Output';
export declare class GetDailyWorkspaceMTUUsage200Response {
    'data'?: GetDailyWorkspaceMTUUsageV1Output;
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

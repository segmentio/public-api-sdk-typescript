import { GetDailyWorkspaceAPICallsUsageV1Output } from './getDailyWorkspaceAPICallsUsageV1Output';
export declare class GetDailyWorkspaceAPICallsUsage200Response {
    'data'?: GetDailyWorkspaceAPICallsUsageV1Output;
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

import { GetReverseETLSyncStatusesBySubscriptionIdOutput } from './getReverseETLSyncStatusesBySubscriptionIdOutput';
export declare class GetReverseETLSyncStatusesBySubscriptionId200Response {
    'data'?: GetReverseETLSyncStatusesBySubscriptionIdOutput;
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

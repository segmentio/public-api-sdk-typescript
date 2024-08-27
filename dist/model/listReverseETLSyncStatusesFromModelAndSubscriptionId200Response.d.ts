import { ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput } from './listReverseETLSyncStatusesFromModelAndSubscriptionIdOutput';
export declare class ListReverseETLSyncStatusesFromModelAndSubscriptionId200Response {
    'data'?: ListReverseETLSyncStatusesFromModelAndSubscriptionIdOutput;
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

import { ReverseETLSyncStatus } from './reverseETLSyncStatus';
export declare class GetReverseETLSyncStatusOutput {
    'reverseETLSyncStatus': ReverseETLSyncStatus;
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

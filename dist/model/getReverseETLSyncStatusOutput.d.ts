import { ReverseETLSyncOutput } from './reverseETLSyncOutput';
export declare class GetReverseETLSyncStatusOutput {
    'reverseETLSyncStatus': ReverseETLSyncOutput;
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

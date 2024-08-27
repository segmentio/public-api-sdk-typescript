import { SyncExtractPhase } from './syncExtractPhase';
import { SyncLoadPhase } from './syncLoadPhase';
export declare class ReverseETLSyncOutput {
    'syncId': string;
    'modelId': string;
    'sourceId': string;
    'syncStatus': string;
    'duration': string;
    'startedAt': string;
    'finishedAt'?: string;
    'extractPhase'?: SyncExtractPhase;
    'loadPhase'?: SyncLoadPhase;
    'error'?: string;
    'errorCode'?: string;
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

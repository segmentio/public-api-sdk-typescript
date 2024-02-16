export declare class SyncExtractPhase {
    'addedCount': string;
    'updatedCount': string;
    'deletedCount': string;
    'extractCount': string;
    'errorCode': string;
    'startedAt': string;
    'finishedAt': string;
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

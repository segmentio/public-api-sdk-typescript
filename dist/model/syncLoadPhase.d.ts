export declare class SyncLoadPhase {
    'deliverSuccessCount': string;
    'deliverFailureCount': string;
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

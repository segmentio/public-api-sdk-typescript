export declare class SourceAPICallSnapshotV1 {
    'sourceId': string;
    'apiCalls': string;
    'timestamp': string;
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

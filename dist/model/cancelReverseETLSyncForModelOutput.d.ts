export declare class CancelReverseETLSyncForModelOutput {
    'modelId': string;
    'syncId': string;
    'errorCode'?: string;
    'errorMessage'?: string;
    'status'?: string;
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

export declare class CreateDownloadAlphaInput {
    'collectionId': string;
    'workspaceId': string;
    'startTime': string;
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

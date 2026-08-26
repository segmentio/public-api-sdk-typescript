export declare class AudienceCsvExport {
    'exportId': string;
    'status': string;
    'startedAt': string;
    'finishedAt'?: string;
    'urls'?: Array<string>;
    'expiresAt'?: string;
    'error'?: string;
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

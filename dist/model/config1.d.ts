export declare class Config1 {
    'interval': string;
    'days': Array<number>;
    'hours': Array<number>;
    'timezone': string;
    'spec': string;
    'jobId': string;
    'accountId': string;
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

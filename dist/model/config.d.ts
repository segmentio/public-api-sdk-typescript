export declare class Config {
    'interval': string;
    'days': Array<number>;
    'hours': Array<number>;
    'timezone': string;
    'spec': string;
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

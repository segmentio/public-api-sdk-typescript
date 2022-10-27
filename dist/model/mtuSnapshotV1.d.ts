export declare class MtuSnapshotV1 {
    'periodStart': number;
    'periodEnd': number;
    'anonymous': string;
    'anonymousIdentified': string;
    'identified': string;
    'neverIdentified': string;
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

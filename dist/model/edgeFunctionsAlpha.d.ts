export declare class EdgeFunctionsAlpha {
    'id': string;
    'sourceId': string;
    'createdAt': string;
    'createdBy': string;
    'downloadURL': string;
    'version': number;
    'code'?: string | null;
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

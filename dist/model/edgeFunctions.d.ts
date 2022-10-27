export declare class EdgeFunctions {
    'id': string;
    'sourceId': string;
    'createdAt': string;
    'createdBy': string;
    'downloadURL': string;
    'version': number;
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

export declare class EntityDetails {
    'id': string;
    'idProperty': string;
    'relationshipSlug': string;
    'properties'?: {
        [key: string]: any;
    };
    'entities'?: {
        [key: string]: any;
    };
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

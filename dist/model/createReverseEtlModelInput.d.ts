export declare class CreateReverseEtlModelInput {
    'sourceId': string;
    'name': string;
    'description': string;
    'enabled': boolean;
    'query': string;
    'queryIdentifierColumn': string;
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

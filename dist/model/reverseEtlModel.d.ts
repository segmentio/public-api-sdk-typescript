export declare class ReverseEtlModel {
    'id': string;
    'sourceId': string;
    'name': string;
    'description': string;
    'enabled': boolean;
    'scheduleStrategy': string;
    'scheduleConfig': any | null;
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

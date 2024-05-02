export declare class ReverseEtlModel {
    'id': string;
    'sourceId': string;
    'name': string;
    'description': string;
    'enabled': boolean;
    'scheduleStrategy': string;
    'scheduleConfig'?: {
        [key: string]: any;
    };
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

import { Metadata } from './metadata';
export declare class Destination2 {
    'id': string;
    'name'?: string;
    'enabled': boolean;
    'metadata': Metadata;
    'sourceId': string;
    'settings': {
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

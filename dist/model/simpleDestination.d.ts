import { IDSyncOptions } from './iDSyncOptions';
import { Metadata } from './metadata';
export declare class SimpleDestination {
    'id': string;
    'name'?: string;
    'sourceId': string;
    'enabled': boolean;
    'createdAt': string;
    'updatedAt': string;
    'settings': {
        [key: string]: any;
    };
    'metadata'?: Metadata;
    'idSync'?: IDSyncOptions;
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

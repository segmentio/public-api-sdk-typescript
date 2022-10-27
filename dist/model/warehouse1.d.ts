import { Metadata2 } from './metadata2';
export declare class Warehouse1 {
    'id': string;
    'metadata': Metadata2;
    'workspaceId': string;
    'enabled': boolean;
    'settings': any;
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

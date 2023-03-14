import { Metadata1 } from './metadata1';
export declare class Warehouse2 {
    'id': string;
    'metadata': Metadata1;
    'workspaceId': string;
    'enabled': boolean;
    'settings': any | null;
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

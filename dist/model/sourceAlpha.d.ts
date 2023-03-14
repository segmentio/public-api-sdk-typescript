import { LabelV1 } from './labelV1';
import { Metadata2 } from './metadata2';
export declare class SourceAlpha {
    'id': string;
    'slug': string;
    'name'?: string;
    'metadata': Metadata2;
    'workspaceId': string;
    'enabled': boolean;
    'writeKeys': Array<string>;
    'settings'?: any | null;
    'labels': Array<LabelV1>;
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

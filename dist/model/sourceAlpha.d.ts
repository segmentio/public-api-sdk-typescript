import { LabelV1 } from './labelV1';
import { Metadata1 } from './metadata1';
export declare class SourceAlpha {
    'id': string;
    'slug': string;
    'name'?: string;
    'metadata': Metadata1;
    'workspaceId': string;
    'enabled': boolean;
    'writeKeys': Array<string>;
    'settings'?: any;
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

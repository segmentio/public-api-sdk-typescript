import { LabelV1 } from './labelV1';
import { SourceMetadataV1 } from './sourceMetadataV1';
export declare class SourceAlpha {
    'id': string;
    'slug': string;
    'name'?: string;
    'metadata': SourceMetadataV1;
    'workspaceId': string;
    'enabled': boolean;
    'writeKeys': Array<string>;
    'settings'?: {
        [key: string]: any;
    };
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

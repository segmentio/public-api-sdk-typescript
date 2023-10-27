import { SourceMetadataV1 } from './sourceMetadataV1';
export declare class GetSourceMetadataV1Output {
    'sourceMetadata': SourceMetadataV1;
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

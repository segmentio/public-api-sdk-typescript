import { SourceMetadata } from './sourceMetadata';
export declare class GetSourceMetadataV1Output {
    'sourceMetadata': SourceMetadata;
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

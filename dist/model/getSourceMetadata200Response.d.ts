import { GetSourceMetadataV1Output } from './getSourceMetadataV1Output';
export declare class GetSourceMetadata200Response {
    'data'?: GetSourceMetadataV1Output;
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

import { GetDestinationMetadataV1Output } from './getDestinationMetadataV1Output';
export declare class GetDestinationMetadata200Response {
    'data'?: GetDestinationMetadataV1Output;
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

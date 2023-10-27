import { DestinationMetadataV1 } from './destinationMetadataV1';
export declare class GetDestinationMetadataV1Output {
    'destinationMetadata': DestinationMetadataV1;
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

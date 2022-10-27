import { DestinationMetadata } from './destinationMetadata';
export declare class GetDestinationMetadataV1Output {
    'destinationMetadata': DestinationMetadata;
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

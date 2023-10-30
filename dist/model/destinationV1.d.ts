import { DestinationMetadataV1 } from './destinationMetadataV1';
export declare class DestinationV1 {
    'id': string;
    'name'?: string;
    'enabled': boolean;
    'metadata': DestinationMetadataV1;
    'sourceId': string;
    'settings': {
        [key: string]: any;
    };
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

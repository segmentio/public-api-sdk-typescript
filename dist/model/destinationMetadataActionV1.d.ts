import { DestinationMetadataActionFieldV1 } from './destinationMetadataActionFieldV1';
export declare class DestinationMetadataActionV1 {
    'id': string;
    'slug': string;
    'name': string;
    'description': string;
    'platform': DestinationMetadataActionV1.PlatformEnum;
    'hidden': boolean;
    'defaultTrigger': string | null;
    'fields': Array<DestinationMetadataActionFieldV1>;
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
export declare namespace DestinationMetadataActionV1 {
    enum PlatformEnum {
        CLOUD,
        MOBILE,
        WEB
    }
}

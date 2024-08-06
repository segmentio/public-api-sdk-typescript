import { IntegrationOptionBeta } from './integrationOptionBeta';
import { LogosBeta } from './logosBeta';
export declare class SourceMetadataV1 {
    'id': string;
    'name': string;
    'slug': string;
    'description': string;
    'logos': LogosBeta;
    'options': Array<IntegrationOptionBeta>;
    'categories': Array<string>;
    'isCloudEventSource': boolean;
    'status': SourceMetadataV1.StatusEnum;
    'partnerOwned'?: boolean;
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
export declare namespace SourceMetadataV1 {
    enum StatusEnum {
        DEPRECATED,
        PRIVATE_BETA,
        PRIVATE_BUILDING,
        PRIVATE_SUBMITTED,
        PUBLIC,
        PUBLIC_BETA,
        UNAVAILABLE
    }
}

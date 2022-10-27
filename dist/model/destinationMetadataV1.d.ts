import { Contact } from './contact';
import { DestinationMetadataActionV1 } from './destinationMetadataActionV1';
import { DestinationMetadataComponentV1 } from './destinationMetadataComponentV1';
import { DestinationMetadataSubscriptionPresetV1 } from './destinationMetadataSubscriptionPresetV1';
import { IntegrationOptionBeta } from './integrationOptionBeta';
import { Logos } from './logos';
import { SupportedFeatures } from './supportedFeatures';
import { SupportedMethods } from './supportedMethods';
import { SupportedPlatforms } from './supportedPlatforms';
export declare class DestinationMetadataV1 {
    'id': string;
    'name': string;
    'description': string;
    'slug': string;
    'logos': Logos;
    'options': Array<IntegrationOptionBeta>;
    'status': DestinationMetadataV1.StatusEnum;
    'previousNames': Array<string>;
    'categories': Array<string>;
    'website': string;
    'components': Array<DestinationMetadataComponentV1>;
    'supportedFeatures': SupportedFeatures;
    'supportedMethods': SupportedMethods;
    'supportedPlatforms': SupportedPlatforms;
    'actions': Array<DestinationMetadataActionV1>;
    'presets': Array<DestinationMetadataSubscriptionPresetV1>;
    'contacts'?: Array<Contact>;
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
export declare namespace DestinationMetadataV1 {
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

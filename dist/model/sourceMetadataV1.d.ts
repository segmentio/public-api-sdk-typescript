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

import { IntegrationOptionBeta } from './integrationOptionBeta';
import { LogosBeta } from './logosBeta';
export declare class WarehouseMetadataV1 {
    'id': string;
    'name': string;
    'slug': string;
    'description': string;
    'logos': LogosBeta;
    'options': Array<IntegrationOptionBeta>;
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

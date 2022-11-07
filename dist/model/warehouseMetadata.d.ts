import { IntegrationOptionV1 } from './integrationOptionV1';
import { Logos2 } from './logos2';
export declare class WarehouseMetadata {
    'id': string;
    'name': string;
    'slug': string;
    'description': string;
    'logos': Logos2;
    'options': Array<IntegrationOptionV1>;
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

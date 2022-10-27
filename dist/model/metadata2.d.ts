import { IntegrationOptionBeta } from './integrationOptionBeta';
import { Logos2 } from './logos2';
export declare class Metadata2 {
    'id': string;
    'name': string;
    'slug': string;
    'description': string;
    'logos': Logos2;
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

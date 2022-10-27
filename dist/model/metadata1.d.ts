import { IntegrationOptionBeta } from './integrationOptionBeta';
import { Logos1 } from './logos1';
export declare class Metadata1 {
    'id': string;
    'name': string;
    'slug': string;
    'description': string;
    'logos': Logos1;
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

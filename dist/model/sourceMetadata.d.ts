import { IntegrationOptionV1 } from './integrationOptionV1';
import { Logos1 } from './logos1';
export declare class SourceMetadata {
    'id': string;
    'name': string;
    'slug': string;
    'description': string;
    'logos': Logos1;
    'options': Array<IntegrationOptionV1>;
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

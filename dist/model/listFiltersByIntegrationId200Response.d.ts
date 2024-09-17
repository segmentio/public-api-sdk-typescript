import { ListFiltersByIntegrationIdOutput } from './listFiltersByIntegrationIdOutput';
export declare class ListFiltersByIntegrationId200Response {
    'data'?: ListFiltersByIntegrationIdOutput;
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

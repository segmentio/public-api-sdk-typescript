import { ListPropertiesFromEntityAlphaOutput } from './listPropertiesFromEntityAlphaOutput';
export declare class ListPropertiesFromEntity200Response {
    'data'?: ListPropertiesFromEntityAlphaOutput;
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

import { ListPropertiesFromEventAlphaOutput } from './listPropertiesFromEventAlphaOutput';
export declare class ListPropertiesFromEvent200Response {
    'data'?: ListPropertiesFromEventAlphaOutput;
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

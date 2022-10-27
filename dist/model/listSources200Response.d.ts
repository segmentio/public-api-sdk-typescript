import { ListSourcesAlphaOutput } from './listSourcesAlphaOutput';
export declare class ListSources200Response {
    'data'?: ListSourcesAlphaOutput;
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

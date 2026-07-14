import { ListEntityPathsAlphaOutput } from './listEntityPathsAlphaOutput';
export declare class ListEntityPaths200Response {
    'data'?: ListEntityPathsAlphaOutput;
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

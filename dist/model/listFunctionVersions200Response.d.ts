import { ListVersionsAlphaOutput } from './listVersionsAlphaOutput';
export declare class ListFunctionVersions200Response {
    'data'?: ListVersionsAlphaOutput;
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

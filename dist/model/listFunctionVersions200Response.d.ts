import { ListFunctionVersionsAlphaOutput } from './listFunctionVersionsAlphaOutput';
export declare class ListFunctionVersions200Response {
    'data'?: ListFunctionVersionsAlphaOutput;
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

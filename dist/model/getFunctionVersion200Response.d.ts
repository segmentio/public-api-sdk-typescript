import { GetFunctionVersionAlphaOutput } from './getFunctionVersionAlphaOutput';
export declare class GetFunctionVersion200Response {
    'data'?: GetFunctionVersionAlphaOutput;
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

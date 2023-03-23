import { RestoreFunctionVersionAlphaOutput } from './restoreFunctionVersionAlphaOutput';
export declare class RestoreFunctionVersion200Response {
    'data'?: RestoreFunctionVersionAlphaOutput;
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

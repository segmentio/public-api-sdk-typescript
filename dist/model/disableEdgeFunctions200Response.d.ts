import { DisableEdgeFunctionsAlphaOutput } from './disableEdgeFunctionsAlphaOutput';
export declare class DisableEdgeFunctions200Response {
    'data'?: DisableEdgeFunctionsAlphaOutput;
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

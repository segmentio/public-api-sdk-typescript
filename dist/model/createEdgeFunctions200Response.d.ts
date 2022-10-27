import { CreateEdgeFunctionsAlphaOutput } from './createEdgeFunctionsAlphaOutput';
export declare class CreateEdgeFunctions200Response {
    'data'?: CreateEdgeFunctionsAlphaOutput;
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

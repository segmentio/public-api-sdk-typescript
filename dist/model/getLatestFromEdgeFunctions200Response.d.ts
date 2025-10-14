import { GetLatestFromEdgeFunctionsAlphaOutput } from './getLatestFromEdgeFunctionsAlphaOutput';
export declare class GetLatestFromEdgeFunctions200Response {
    'data'?: GetLatestFromEdgeFunctionsAlphaOutput;
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

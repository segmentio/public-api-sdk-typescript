import { EdgeFunctionsAlpha } from './edgeFunctionsAlpha';
export declare class CreateEdgeFunctionAlphaOutput {
    'edgeFunction': EdgeFunctionsAlpha;
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

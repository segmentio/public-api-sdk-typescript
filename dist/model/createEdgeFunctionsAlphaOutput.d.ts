import { EdgeFunctionsAlpha } from './edgeFunctionsAlpha';
export declare class CreateEdgeFunctionsAlphaOutput {
    'edgeFunctions': EdgeFunctionsAlpha;
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

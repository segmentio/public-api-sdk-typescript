import { EdgeFunctions } from './edgeFunctions';
export declare class CreateEdgeFunctionsAlphaOutput {
    'edgeFunctions': EdgeFunctions;
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

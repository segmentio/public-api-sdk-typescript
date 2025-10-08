import { DeleteEdgeFunctionCodeAlphaOutput } from './deleteEdgeFunctionCodeAlphaOutput';
export declare class DeleteEdgeFunctionCode200Response {
    'data'?: DeleteEdgeFunctionCodeAlphaOutput;
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

import { UpdateInsertFunctionInstanceAlphaOutput } from './updateInsertFunctionInstanceAlphaOutput';
export declare class UpdateInsertFunctionInstance200Response {
    'data'?: UpdateInsertFunctionInstanceAlphaOutput;
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

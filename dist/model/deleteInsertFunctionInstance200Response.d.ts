import { DeleteInsertFunctionInstanceAlphaOutput } from './deleteInsertFunctionInstanceAlphaOutput';
export declare class DeleteInsertFunctionInstance200Response {
    'data'?: DeleteInsertFunctionInstanceAlphaOutput;
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

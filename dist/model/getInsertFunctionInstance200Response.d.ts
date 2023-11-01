import { GetInsertFunctionInstanceAlphaOutput } from './getInsertFunctionInstanceAlphaOutput';
export declare class GetInsertFunctionInstance200Response {
    'data'?: GetInsertFunctionInstanceAlphaOutput;
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

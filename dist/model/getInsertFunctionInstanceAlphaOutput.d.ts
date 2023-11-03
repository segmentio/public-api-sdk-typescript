import { InsertFunctionInstanceAlpha } from './insertFunctionInstanceAlpha';
export declare class GetInsertFunctionInstanceAlphaOutput {
    'insertFunctionInstance': InsertFunctionInstanceAlpha;
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

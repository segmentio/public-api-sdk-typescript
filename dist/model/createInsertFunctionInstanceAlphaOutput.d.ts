import { InsertFunctionInstance } from './insertFunctionInstance';
export declare class CreateInsertFunctionInstanceAlphaOutput {
    'insertFunctionInstance': InsertFunctionInstance;
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

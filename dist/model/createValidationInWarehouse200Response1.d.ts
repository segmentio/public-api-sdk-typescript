import { CreateValidationInWarehouseV2Output } from './createValidationInWarehouseV2Output';
export declare class CreateValidationInWarehouse200Response1 {
    'data'?: CreateValidationInWarehouseV2Output;
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

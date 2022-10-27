import { CreateValidationInWarehouseV1Output } from './createValidationInWarehouseV1Output';
export declare class CreateValidationInWarehouse200Response {
    'data'?: CreateValidationInWarehouseV1Output;
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

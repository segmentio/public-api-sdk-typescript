import { CreateWarehouseV2Output } from './createWarehouseV2Output';
export declare class CreateWarehouse201Response1 {
    'data'?: CreateWarehouseV2Output;
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

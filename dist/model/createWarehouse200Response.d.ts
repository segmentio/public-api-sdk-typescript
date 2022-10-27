import { CreateWarehouseV1Output } from './createWarehouseV1Output';
export declare class CreateWarehouse200Response {
    'data'?: CreateWarehouseV1Output;
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

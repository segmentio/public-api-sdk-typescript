import { DeleteWarehouseV1Output } from './deleteWarehouseV1Output';
export declare class DeleteWarehouse200Response {
    'data'?: DeleteWarehouseV1Output;
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

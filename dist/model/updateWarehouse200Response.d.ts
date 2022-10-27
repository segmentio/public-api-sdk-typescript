import { UpdateWarehouseV1Output } from './updateWarehouseV1Output';
export declare class UpdateWarehouse200Response {
    'data'?: UpdateWarehouseV1Output;
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

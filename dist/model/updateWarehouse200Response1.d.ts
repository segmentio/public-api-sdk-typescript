import { UpdateWarehouseV2Output } from './updateWarehouseV2Output';
export declare class UpdateWarehouse200Response1 {
    'data'?: UpdateWarehouseV2Output;
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

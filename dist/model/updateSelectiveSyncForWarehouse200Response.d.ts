import { UpdateSelectiveSyncForWarehouseV1Output } from './updateSelectiveSyncForWarehouseV1Output';
export declare class UpdateSelectiveSyncForWarehouse200Response {
    'data'?: UpdateSelectiveSyncForWarehouseV1Output;
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

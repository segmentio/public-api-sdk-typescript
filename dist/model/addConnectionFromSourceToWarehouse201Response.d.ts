import { AddConnectionFromSourceToWarehouseV1Output } from './addConnectionFromSourceToWarehouseV1Output';
export declare class AddConnectionFromSourceToWarehouse201Response {
    'data'?: AddConnectionFromSourceToWarehouseV1Output;
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

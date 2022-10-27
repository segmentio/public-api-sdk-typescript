import { ListWarehousesV1Output } from './listWarehousesV1Output';
export declare class ListWarehouses200Response {
    'data'?: ListWarehousesV1Output;
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

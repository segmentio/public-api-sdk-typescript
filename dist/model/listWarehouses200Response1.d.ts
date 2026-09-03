import { ListWarehousesV2Output } from './listWarehousesV2Output';
export declare class ListWarehouses200Response1 {
    'data'?: ListWarehousesV2Output;
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

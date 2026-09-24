import { GetWarehouseV2Output } from './getWarehouseV2Output';
export declare class GetWarehouse200Response1 {
    'data'?: GetWarehouseV2Output;
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

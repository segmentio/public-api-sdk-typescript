import { GetWarehouseV1Output } from './getWarehouseV1Output';
export declare class GetWarehouse200Response {
    'data'?: GetWarehouseV1Output;
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

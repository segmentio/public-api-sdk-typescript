import { GetConnectionStateFromWarehouseV1Output } from './getConnectionStateFromWarehouseV1Output';
export declare class GetConnectionStateFromWarehouse200Response {
    'data'?: GetConnectionStateFromWarehouseV1Output;
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

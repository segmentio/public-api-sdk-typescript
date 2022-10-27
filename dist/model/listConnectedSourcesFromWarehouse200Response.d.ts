import { ListConnectedSourcesFromWarehouseV1Output } from './listConnectedSourcesFromWarehouseV1Output';
export declare class ListConnectedSourcesFromWarehouse200Response {
    'data'?: ListConnectedSourcesFromWarehouseV1Output;
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

import { ListConnectedWarehousesFromSourceV1Output } from './listConnectedWarehousesFromSourceV1Output';
export declare class ListConnectedWarehousesFromSource200Response {
    'data'?: ListConnectedWarehousesFromSourceV1Output;
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

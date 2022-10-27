import { ListConnectedWarehousesFromSourceAlphaOutput } from './listConnectedWarehousesFromSourceAlphaOutput';
export declare class ListConnectedWarehousesFromSource200Response {
    'data'?: ListConnectedWarehousesFromSourceAlphaOutput;
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

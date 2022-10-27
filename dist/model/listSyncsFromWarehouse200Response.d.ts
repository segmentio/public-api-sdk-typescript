import { ListSyncsFromWarehouseV1Output } from './listSyncsFromWarehouseV1Output';
export declare class ListSyncsFromWarehouse200Response {
    'data'?: ListSyncsFromWarehouseV1Output;
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

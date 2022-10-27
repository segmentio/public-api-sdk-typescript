import { ListSyncsFromWarehouseAndSourceV1Output } from './listSyncsFromWarehouseAndSourceV1Output';
export declare class ListSyncsFromWarehouseAndSource200Response {
    'data'?: ListSyncsFromWarehouseAndSourceV1Output;
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

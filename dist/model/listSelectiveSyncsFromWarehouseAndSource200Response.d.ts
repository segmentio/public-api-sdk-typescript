import { ListSelectiveSyncsFromWarehouseAndSourceV1Output } from './listSelectiveSyncsFromWarehouseAndSourceV1Output';
export declare class ListSelectiveSyncsFromWarehouseAndSource200Response {
    'data'?: ListSelectiveSyncsFromWarehouseAndSourceV1Output;
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

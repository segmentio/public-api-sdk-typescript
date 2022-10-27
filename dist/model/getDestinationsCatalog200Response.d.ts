import { GetDestinationsCatalogV1Output } from './getDestinationsCatalogV1Output';
export declare class GetDestinationsCatalog200Response {
    'data'?: GetDestinationsCatalogV1Output;
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

import { GetSourcesCatalogV1Output } from './getSourcesCatalogV1Output';
export declare class GetSourcesCatalog200Response {
    'data'?: GetSourcesCatalogV1Output;
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

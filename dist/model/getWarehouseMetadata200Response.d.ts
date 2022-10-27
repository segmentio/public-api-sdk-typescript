import { GetWarehouseMetadataV1Output } from './getWarehouseMetadataV1Output';
export declare class GetWarehouseMetadata200Response {
    'data'?: GetWarehouseMetadataV1Output;
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

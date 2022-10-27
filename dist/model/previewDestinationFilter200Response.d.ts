import { PreviewDestinationFilterV1Output } from './previewDestinationFilterV1Output';
export declare class PreviewDestinationFilter200Response {
    'data'?: PreviewDestinationFilterV1Output;
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

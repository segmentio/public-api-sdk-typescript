import { ListTransformationsV1Output } from './listTransformationsV1Output';
export declare class ListTransformations200Response {
    'data'?: ListTransformationsV1Output;
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

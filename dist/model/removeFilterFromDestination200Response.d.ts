import { RemoveFilterFromDestinationV1Output } from './removeFilterFromDestinationV1Output';
export declare class RemoveFilterFromDestination200Response {
    'data'?: RemoveFilterFromDestinationV1Output;
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

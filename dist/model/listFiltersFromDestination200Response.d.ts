import { ListFiltersFromDestinationV1Output } from './listFiltersFromDestinationV1Output';
export declare class ListFiltersFromDestination200Response {
    'data'?: ListFiltersFromDestinationV1Output;
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

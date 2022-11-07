import { ListConnectedDestinationsFromSourceV1Output } from './listConnectedDestinationsFromSourceV1Output';
export declare class ListConnectedDestinationsFromSource200Response {
    'data'?: ListConnectedDestinationsFromSourceV1Output;
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

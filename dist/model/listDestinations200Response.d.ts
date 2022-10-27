import { ListDestinationsV1Output } from './listDestinationsV1Output';
export declare class ListDestinations200Response {
    'data'?: ListDestinationsV1Output;
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

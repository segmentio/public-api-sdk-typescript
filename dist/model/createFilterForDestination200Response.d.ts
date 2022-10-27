import { CreateFilterForDestinationV1Output } from './createFilterForDestinationV1Output';
export declare class CreateFilterForDestination200Response {
    'data'?: CreateFilterForDestinationV1Output;
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

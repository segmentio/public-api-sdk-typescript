import { UpdateFilterForDestinationV1Output } from './updateFilterForDestinationV1Output';
export declare class UpdateFilterForDestination200Response {
    'data'?: UpdateFilterForDestinationV1Output;
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

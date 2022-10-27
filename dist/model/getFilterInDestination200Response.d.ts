import { GetFilterInDestinationV1Output } from './getFilterInDestinationV1Output';
export declare class GetFilterInDestination200Response {
    'data'?: GetFilterInDestinationV1Output;
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

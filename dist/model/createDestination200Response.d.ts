import { CreateDestinationV1Output } from './createDestinationV1Output';
export declare class CreateDestination200Response {
    'data'?: CreateDestinationV1Output;
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

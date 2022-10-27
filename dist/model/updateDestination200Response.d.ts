import { UpdateDestinationV1Output } from './updateDestinationV1Output';
export declare class UpdateDestination200Response {
    'data'?: UpdateDestinationV1Output;
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

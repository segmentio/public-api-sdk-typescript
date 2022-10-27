import { DeleteDestinationV1Output } from './deleteDestinationV1Output';
export declare class DeleteDestination200Response {
    'data'?: DeleteDestinationV1Output;
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

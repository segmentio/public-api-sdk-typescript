import { GetDestinationV1Output } from './getDestinationV1Output';
export declare class GetDestination200Response {
    'data'?: GetDestinationV1Output;
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

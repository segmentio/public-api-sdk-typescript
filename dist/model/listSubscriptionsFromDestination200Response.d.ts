import { ListSubscriptionsFromDestinationAlphaOutput } from './listSubscriptionsFromDestinationAlphaOutput';
export declare class ListSubscriptionsFromDestination200Response {
    'data'?: ListSubscriptionsFromDestinationAlphaOutput;
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

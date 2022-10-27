import { RemoveSubscriptionFromDestinationAlphaOutput } from './removeSubscriptionFromDestinationAlphaOutput';
export declare class RemoveSubscriptionFromDestination200Response {
    'data'?: RemoveSubscriptionFromDestinationAlphaOutput;
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

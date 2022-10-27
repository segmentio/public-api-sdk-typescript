import { GetSubscriptionFromDestinationAlphaOutput } from './getSubscriptionFromDestinationAlphaOutput';
export declare class GetSubscriptionFromDestination200Response {
    'data'?: GetSubscriptionFromDestinationAlphaOutput;
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

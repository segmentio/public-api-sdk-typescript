import { DestinationSubscription } from './destinationSubscription';
export declare class GetSubscriptionFromDestinationAlphaOutput {
    'subscription': DestinationSubscription;
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

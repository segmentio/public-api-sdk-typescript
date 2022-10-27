import { CreateDestinationSubscriptionAlphaOutput } from './createDestinationSubscriptionAlphaOutput';
export declare class CreateDestinationSubscription200Response {
    'data'?: CreateDestinationSubscriptionAlphaOutput;
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

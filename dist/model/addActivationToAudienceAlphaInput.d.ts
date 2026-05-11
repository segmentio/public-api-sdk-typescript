import { DestinationSubscriptionConfiguration } from './destinationSubscriptionConfiguration';
import { PersonalizationInput } from './personalizationInput';
export declare class AddActivationToAudienceAlphaInput {
    'enabled'?: boolean;
    'performResync': boolean;
    'activationType': string;
    'activationName': string;
    'personalization': PersonalizationInput;
    'destinationMapping'?: DestinationSubscriptionConfiguration;
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

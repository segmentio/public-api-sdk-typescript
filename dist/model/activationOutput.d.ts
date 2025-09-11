import { DestinationSubscriptionConfiguration } from './destinationSubscriptionConfiguration';
import { PersonalizationInput } from './personalizationInput';
export declare class ActivationOutput {
    'id': string;
    'enabled': boolean;
    'workspaceId': string;
    'spaceId': string;
    'audienceId': string;
    'destinationConnectionId': string;
    'activationType': string;
    'activationName': string;
    'personalization': PersonalizationInput;
    'destinationMapping': DestinationSubscriptionConfiguration;
    'performFirstSync'?: boolean;
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

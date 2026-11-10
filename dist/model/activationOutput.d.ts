import { DestinationSubscriptionConfiguration } from './destinationSubscriptionConfiguration';
import { PersonalizationOutput } from './personalizationOutput';
export declare class ActivationOutput {
    'id': string;
    'enabled': boolean;
    'workspaceId': string;
    'spaceId': string;
    'audienceId': string;
    'connectionId': string;
    'activationType': string;
    'activationName': string;
    'displayName'?: string | null;
    'personalization': PersonalizationOutput;
    'destinationMapping'?: DestinationSubscriptionConfiguration;
    'performResync'?: boolean;
    'createdAt': string;
    'updatedAt': string;
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

import { DestinationSubscriptionUpdateInput } from './destinationSubscriptionUpdateInput';
export declare class UpdateSubscriptionForDestinationAlphaInput {
    'input': DestinationSubscriptionUpdateInput;
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

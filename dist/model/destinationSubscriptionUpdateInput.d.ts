import { ReverseEtlScheduleDefinition } from './reverseEtlScheduleDefinition';
export declare class DestinationSubscriptionUpdateInput {
    'name'?: string;
    'trigger'?: string;
    'enabled'?: boolean;
    'settings'?: {
        [key: string]: any;
    };
    'reverseETLModelId'?: string;
    'reverseETLSchedule'?: ReverseEtlScheduleDefinition;
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

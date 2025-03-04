import { Destination } from './destination';
import { Key } from './key';
import { RandomSplitBranch } from './randomSplitBranch';
export declare class BaseState {
    'type': BaseState.TypeEnum;
    'condition': string;
    'transitions': Array<RandomSplitBranch>;
    'key': Key;
    'audienceId': string;
    'destinations': Array<Destination>;
    'duration': string;
    'exitType': BaseState.ExitTypeEnum;
    'enabled': boolean;
    'concurrencyEnabled': boolean;
    'connectedDestinations'?: Array<string>;
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
export declare namespace BaseState {
    enum TypeEnum {
        RANDOM_SPLIT,
        EXIT,
        DESTINATION,
        EXIT_RULE
    }
    enum ExitTypeEnum {
        AUDIENCE_MEMBERSHIP_CHANGE,
        CONDITION_UNMATCH,
        EVENT_PERFORMED
    }
}

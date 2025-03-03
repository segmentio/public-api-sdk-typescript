import { Destination } from './destination';
import { Key } from './key';
import { Transitions } from './transitions';
export declare class BaseState {
    'type': BaseState.TypeEnum;
    'condition': string;
    'transitions': Array<Transitions>;
    'key': Key;
    'audienceId': string;
    'destinations': Array<Destination>;
    'duration': string;
    'exitType': BaseState.ExitTypeEnum;
    'enabled': boolean;
    'concurrencyEnabled': boolean;
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
        EXIT_RULE
    }
    enum ExitTypeEnum {
        AUDIENCE_MEMBERSHIP_CHANGE,
        CONDITION_UNMATCH,
        EVENT_PERFORMED
    }
}

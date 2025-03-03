import { Key } from './key';
import { Transitions } from './transitions';
export declare class EventEntryState {
    'type': EventEntryState.TypeEnum;
    'condition': string;
    'transitions': Array<Transitions>;
    'key': Key;
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
export declare namespace EventEntryState {
    enum TypeEnum {
        EVENT_ENTRY,
        AUDIENCE_ENTRY,
        DESTINATION,
        SIMPLE_DELAY,
        EVENT_SPLIT,
        CONDITION_SPLIT,
        RANDOM_SPLIT,
        EXIT,
        EXIT_RULE
    }
}

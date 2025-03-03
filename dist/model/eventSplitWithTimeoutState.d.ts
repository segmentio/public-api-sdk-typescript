import { Key } from './key';
import { TransitionsInner } from './transitionsInner';
export declare class EventSplitWithTimeoutState {
    'type': EventSplitWithTimeoutState.TypeEnum;
    'transitions': Array<TransitionsInner>;
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
export declare namespace EventSplitWithTimeoutState {
    enum TypeEnum {
        EVENT_SPLIT
    }
}

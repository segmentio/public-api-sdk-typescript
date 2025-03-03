import { Key } from './key';
import { TransitionsInner1 } from './transitionsInner1';
export declare class ConditionSplitState {
    'type': ConditionSplitState.TypeEnum;
    'transitions': Array<TransitionsInner1>;
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
export declare namespace ConditionSplitState {
    enum TypeEnum {
        CONDITION_SPLIT
    }
}

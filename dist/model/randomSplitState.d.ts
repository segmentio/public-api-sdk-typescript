import { Key } from './key';
import { RandomSplitBranch } from './randomSplitBranch';
export declare class RandomSplitState {
    'type': RandomSplitState.TypeEnum;
    'transitions': Array<RandomSplitBranch>;
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
export declare namespace RandomSplitState {
    enum TypeEnum {
        RANDOM_SPLIT,
        EXIT,
        EXIT_RULE
    }
}

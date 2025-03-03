import { Key } from './key';
import { Transitions } from './transitions';
export declare class SimpleDelayState {
    'type': SimpleDelayState.TypeEnum;
    'duration': string;
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
export declare namespace SimpleDelayState {
    enum TypeEnum {
        SIMPLE_DELAY
    }
}

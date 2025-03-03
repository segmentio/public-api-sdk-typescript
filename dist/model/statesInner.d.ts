import { Destination } from './destination';
import { Key } from './key';
import { Transitions } from './transitions';
export declare class StatesInner {
    'type': StatesInner.TypeEnum;
    'destinations': Array<Destination>;
    'transitions': Array<Transitions>;
    'key': Key;
    'exitType': StatesInner.ExitTypeEnum;
    'condition': string;
    'enabled': boolean;
    'concurrencyEnabled': boolean;
    'audienceId': string;
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
export declare namespace StatesInner {
    enum TypeEnum {
        DESTINATION,
        EXIT_RULE
    }
    enum ExitTypeEnum {
        AUDIENCE_MEMBERSHIP_CHANGE
    }
}

import { Key } from './key';
import { Transitions } from './transitions';
export declare class EventExitRule {
    'exitType': EventExitRule.ExitTypeEnum;
    'condition': string;
    'type': EventExitRule.TypeEnum;
    'enabled': boolean;
    'concurrencyEnabled': boolean;
    'transitions'?: Array<Transitions>;
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
export declare namespace EventExitRule {
    enum ExitTypeEnum {
        EVENT_PERFORMED
    }
    enum TypeEnum {
        EXIT_RULE
    }
}

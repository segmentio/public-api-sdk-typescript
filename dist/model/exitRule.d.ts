import { Key } from './key';
export declare class ExitRule {
    'type': ExitRule.TypeEnum;
    'exitType': ExitRule.ExitTypeEnum;
    'enabled': boolean;
    'concurrencyEnabled': boolean;
    'connectedDestinations'?: Array<string>;
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
export declare namespace ExitRule {
    enum TypeEnum {
        EXIT_RULE
    }
    enum ExitTypeEnum {
        AUDIENCE_MEMBERSHIP_CHANGE,
        CONDITION_UNMATCH,
        EVENT_PERFORMED
    }
}

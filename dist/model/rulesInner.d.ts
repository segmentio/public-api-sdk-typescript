import { Key } from './key';
export declare class RulesInner {
    'exitType': RulesInner.ExitTypeEnum;
    'condition': string;
    'type': RulesInner.TypeEnum;
    'enabled': boolean;
    'concurrencyEnabled': boolean;
    'connectedDestinations'?: Array<string>;
    'key': Key;
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
export declare namespace RulesInner {
    enum ExitTypeEnum {
        AUDIENCE_MEMBERSHIP_CHANGE
    }
    enum TypeEnum {
        EXIT_RULE
    }
}

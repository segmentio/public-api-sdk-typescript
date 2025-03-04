import { Key } from './key';
export declare class AudienceExitRule {
    'exitType': AudienceExitRule.ExitTypeEnum;
    'audienceId': string;
    'type': AudienceExitRule.TypeEnum;
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
export declare namespace AudienceExitRule {
    enum ExitTypeEnum {
        AUDIENCE_MEMBERSHIP_CHANGE
    }
    enum TypeEnum {
        EXIT_RULE
    }
}

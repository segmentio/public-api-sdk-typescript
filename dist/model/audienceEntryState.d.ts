import { Key } from './key';
import { Transitions } from './transitions';
export declare class AudienceEntryState {
    'type': AudienceEntryState.TypeEnum;
    'audienceId': string;
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
export declare namespace AudienceEntryState {
    enum TypeEnum {
        AUDIENCE_ENTRY
    }
}

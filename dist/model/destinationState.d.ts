import { Destination } from './destination';
import { Key } from './key';
import { Transitions } from './transitions';
export declare class DestinationState {
    'type': DestinationState.TypeEnum;
    'destinations': Array<Destination>;
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
export declare namespace DestinationState {
    enum TypeEnum {
        DESTINATION
    }
}

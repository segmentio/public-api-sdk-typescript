import { Destination } from './destination';
import { Key } from './key';
export declare class ExitDestinationState {
    'type': ExitDestinationState.TypeEnum;
    'destinations': Array<Destination>;
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
export declare namespace ExitDestinationState {
    enum TypeEnum {
        DESTINATION
    }
}

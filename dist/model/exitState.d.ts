import { Key } from './key';
export declare class ExitState {
    'type': ExitState.TypeEnum;
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
export declare namespace ExitState {
    enum TypeEnum {
        EXIT
    }
}

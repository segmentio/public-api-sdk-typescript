import { TraitType } from './traitType';
export declare class TraitAlpha {
    'trait': string;
    'type': TraitType;
    'lastSeenAt': string;
    'samples'?: Array<string>;
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
export declare namespace TraitAlpha { }

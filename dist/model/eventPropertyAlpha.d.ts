import { EventPropertyType } from './eventPropertyType';
export declare class EventPropertyAlpha {
    'name': string;
    'type': EventPropertyType;
    'eventName': string;
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
export declare namespace EventPropertyAlpha { }

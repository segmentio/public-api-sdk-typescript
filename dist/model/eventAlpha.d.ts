import { EventType } from './eventType';
export declare class EventAlpha {
    'name': string;
    'type': EventType;
    'lastSeenAt': string;
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
export declare namespace EventAlpha { }

import { Group } from './group';
import { Identify } from './identify';
import { Track } from './track';
export declare class Settings {
    'track'?: Track;
    'identify'?: Identify;
    'group'?: Group;
    'forwardingViolationsTo'?: string;
    'forwardingBlockedEventsTo'?: string;
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

import { GroupSourceSettingsV1 } from './groupSourceSettingsV1';
import { IdentifySourceSettingsV1 } from './identifySourceSettingsV1';
import { TrackSourceSettingsV1 } from './trackSourceSettingsV1';
export declare class SourceSettingsOutputV1 {
    'track'?: TrackSourceSettingsV1;
    'identify'?: IdentifySourceSettingsV1;
    'group'?: GroupSourceSettingsV1;
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

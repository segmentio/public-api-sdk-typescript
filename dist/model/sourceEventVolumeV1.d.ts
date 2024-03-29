import { EventSourceV1 } from './eventSourceV1';
import { SourceEventVolumeDatapointV1 } from './sourceEventVolumeDatapointV1';
export declare class SourceEventVolumeV1 {
    'source'?: EventSourceV1;
    'eventName'?: string;
    'eventType'?: string;
    'total': number;
    'series': Array<SourceEventVolumeDatapointV1>;
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

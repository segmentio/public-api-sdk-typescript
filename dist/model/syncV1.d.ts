import { SyncNoticeV1 } from './syncNoticeV1';
export declare class SyncV1 {
    'sourceId': string;
    'start': string;
    'end': string | null;
    'status': string;
    'duration': number;
    'humanDuration': string;
    'count': number;
    'notices': Array<SyncNoticeV1>;
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

import { Pagination } from './pagination';
import { SourceAPICallSnapshotV1 } from './sourceAPICallSnapshotV1';
export declare class GetDailyPerSourceAPICallsUsageV1Output {
    'dailyPerSourceAPICallsUsage': Array<SourceAPICallSnapshotV1>;
    'pagination': Pagination;
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

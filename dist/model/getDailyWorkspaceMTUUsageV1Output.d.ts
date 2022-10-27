import { MtuSnapshotV1 } from './mtuSnapshotV1';
import { Pagination } from './pagination';
export declare class GetDailyWorkspaceMTUUsageV1Output {
    'dailyWorkspaceMTUUsage': Array<MtuSnapshotV1>;
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

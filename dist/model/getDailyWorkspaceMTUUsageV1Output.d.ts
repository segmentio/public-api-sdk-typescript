import { MtuSnapshotV1 } from './mtuSnapshotV1';
import { PaginationOutput } from './paginationOutput';
export declare class GetDailyWorkspaceMTUUsageV1Output {
    'dailyWorkspaceMTUUsage': Array<MtuSnapshotV1>;
    'pagination': PaginationOutput;
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

import { PaginationOutput } from './paginationOutput';
import { UsersPerSourceSnapshotV1 } from './usersPerSourceSnapshotV1';
export declare class GetDailyPerSourceMTUUsageV1Output {
    'dailyPerSourceMTUUsage': Array<UsersPerSourceSnapshotV1>;
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

import { Pagination } from './pagination';
import { Query } from './query';
import { SourceEventVolumeV1 } from './sourceEventVolumeV1';
export declare class GetEventsVolumeFromWorkspaceV1Output {
    'path': string;
    'query': Query;
    'result': Array<SourceEventVolumeV1>;
    'pagination'?: Pagination;
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

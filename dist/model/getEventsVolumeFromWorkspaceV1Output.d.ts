import { GetEventsVolumeFromWorkspaceV1Query } from './getEventsVolumeFromWorkspaceV1Query';
import { PaginationOutput } from './paginationOutput';
import { SourceEventVolumeV1 } from './sourceEventVolumeV1';
export declare class GetEventsVolumeFromWorkspaceV1Output {
    'path': string;
    'query': GetEventsVolumeFromWorkspaceV1Query;
    'result': Array<SourceEventVolumeV1>;
    'pagination'?: PaginationOutput;
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

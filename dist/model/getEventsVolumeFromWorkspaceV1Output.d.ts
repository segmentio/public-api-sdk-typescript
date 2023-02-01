import { Pagination } from './pagination';
import { SourceEventVolumeV1 } from './sourceEventVolumeV1';
export declare class GetEventsVolumeFromWorkspaceV1Output {
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

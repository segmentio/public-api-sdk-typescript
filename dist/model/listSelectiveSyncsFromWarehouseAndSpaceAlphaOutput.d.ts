import { PaginationOutput } from './paginationOutput';
import { SpaceWarehouseSelectiveSyncItemAlpha } from './spaceWarehouseSelectiveSyncItemAlpha';
export declare class ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput {
    'items': Array<SpaceWarehouseSelectiveSyncItemAlpha>;
    'enableEventTables'?: boolean;
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

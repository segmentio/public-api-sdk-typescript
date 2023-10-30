import { PaginationOutput } from './paginationOutput';
import { ProfilesWarehouseAlpha } from './profilesWarehouseAlpha';
export declare class ListProfilesWarehouseInSpaceAlphaOutput {
    'profilesWarehouses': Array<ProfilesWarehouseAlpha>;
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

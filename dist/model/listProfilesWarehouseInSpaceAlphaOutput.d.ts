import { Pagination } from './pagination';
import { ProfilesWarehouseAlpha } from './profilesWarehouseAlpha';
export declare class ListProfilesWarehouseInSpaceAlphaOutput {
    'profilesWarehouses': Array<ProfilesWarehouseAlpha>;
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

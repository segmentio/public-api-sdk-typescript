import { MinimalUserGroupV1 } from './minimalUserGroupV1';
import { Pagination } from './pagination';
export declare class ListUserGroupsFromUserV1Output {
    'groups': Array<MinimalUserGroupV1>;
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

import { PaginationOutput } from './paginationOutput';
import { UserGroupV1 } from './userGroupV1';
export declare class ListUserGroupsV1Output {
    'userGroups': Array<UserGroupV1>;
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

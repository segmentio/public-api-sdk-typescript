import { MinimalUserV1 } from './minimalUserV1';
import { PaginationOutput } from './paginationOutput';
export declare class ListUsersFromUserGroupV1Output {
    'users': Array<MinimalUserV1>;
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

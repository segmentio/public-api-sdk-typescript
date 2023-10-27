import { PaginationOutput } from './paginationOutput';
import { RoleV1 } from './roleV1';
export declare class ListRolesV1Output {
    'roles': Array<RoleV1>;
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

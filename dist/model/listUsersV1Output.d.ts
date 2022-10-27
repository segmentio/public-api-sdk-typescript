import { Pagination } from './pagination';
import { UserV1 } from './userV1';
export declare class ListUsersV1Output {
    'users': Array<UserV1>;
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

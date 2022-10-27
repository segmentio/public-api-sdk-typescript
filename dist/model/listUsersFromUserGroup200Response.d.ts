import { ListUsersFromUserGroupV1Output } from './listUsersFromUserGroupV1Output';
export declare class ListUsersFromUserGroup200Response {
    'data'?: ListUsersFromUserGroupV1Output;
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

import { UserGroupV1 } from './userGroupV1';
export declare class ReplaceUsersInUserGroupV1Output {
    'userGroup': UserGroupV1;
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

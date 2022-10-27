import { UserGroup1 } from './userGroup1';
export declare class ReplaceUsersInUserGroupV1Output {
    'userGroup': UserGroup1;
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

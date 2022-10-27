import { ListUserGroupsV1Output } from './listUserGroupsV1Output';
export declare class ListUserGroups200Response {
    'data'?: ListUserGroupsV1Output;
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

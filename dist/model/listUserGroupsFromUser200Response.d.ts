import { ListUserGroupsFromUserV1Output } from './listUserGroupsFromUserV1Output';
export declare class ListUserGroupsFromUser200Response {
    'data'?: ListUserGroupsFromUserV1Output;
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

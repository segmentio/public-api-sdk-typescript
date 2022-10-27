import { AddUsersToUserGroupV1Output } from './addUsersToUserGroupV1Output';
export declare class AddUsersToUserGroup200Response {
    'data'?: AddUsersToUserGroupV1Output;
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

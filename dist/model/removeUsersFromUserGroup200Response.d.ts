import { RemoveUsersFromUserGroupV1Output } from './removeUsersFromUserGroupV1Output';
export declare class RemoveUsersFromUserGroup200Response {
    'data'?: RemoveUsersFromUserGroupV1Output;
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

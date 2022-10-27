import { AddPermissionsToUserGroupV1Output } from './addPermissionsToUserGroupV1Output';
export declare class AddPermissionsToUserGroup200Response {
    'data'?: AddPermissionsToUserGroupV1Output;
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

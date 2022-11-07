import { PermissionInputV1 } from './permissionInputV1';
export declare class AddPermissionsToUserGroupV1Input {
    'permissions': Array<PermissionInputV1>;
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

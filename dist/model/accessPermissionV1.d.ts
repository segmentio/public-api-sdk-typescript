import { PermissionResourceV1 } from './permissionResourceV1';
export declare class AccessPermissionV1 {
    'roleId': string;
    'roleName': string;
    'resources': Array<PermissionResourceV1>;
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

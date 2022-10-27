import { PermissionV1 } from './permissionV1';
export declare class UserGroup3 {
    'memberCount': number;
    'permissions'?: Array<PermissionV1>;
    'id': string;
    'name': string;
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

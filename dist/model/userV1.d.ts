import { PermissionV1 } from './permissionV1';
export declare class UserV1 {
    'id': string;
    'name': string;
    'email': string;
    'permissions'?: Array<PermissionV1>;
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

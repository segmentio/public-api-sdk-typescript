import { AccessPermissionV1 } from './accessPermissionV1';
export declare class AddPermissionsToUserV1Output {
    'permissions': Array<AccessPermissionV1>;
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

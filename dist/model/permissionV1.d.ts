import { AllowedLabelBeta } from './allowedLabelBeta';
import { PermissionResourceV1 } from './permissionResourceV1';
export declare class PermissionV1 {
    'roleName': string;
    'roleId': string;
    'resources': Array<PermissionResourceV1>;
    'labels'?: Array<AllowedLabelBeta>;
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

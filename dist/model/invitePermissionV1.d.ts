import { AllowedLabelBeta } from './allowedLabelBeta';
import { ResourceV1 } from './resourceV1';
export declare class InvitePermissionV1 {
    'roleId': string;
    'resources'?: Array<ResourceV1>;
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

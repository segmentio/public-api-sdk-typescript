import { AllowedLabelV1 } from './allowedLabelV1';
import { ResourceV1 } from './resourceV1';
export declare class InvitePermissionV1 {
    'roleId': string;
    'resources'?: Array<ResourceV1>;
    'labels'?: Array<AllowedLabelV1>;
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

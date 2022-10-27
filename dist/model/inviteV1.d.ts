import { InvitePermissionV1 } from './invitePermissionV1';
export declare class InviteV1 {
    'email': string;
    'permissions'?: Array<InvitePermissionV1>;
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

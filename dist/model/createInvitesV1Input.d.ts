import { InviteV1 } from './inviteV1';
export declare class CreateInvitesV1Input {
    'invites': Array<InviteV1>;
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

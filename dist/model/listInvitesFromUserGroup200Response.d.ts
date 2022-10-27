import { ListInvitesFromUserGroupV1Output } from './listInvitesFromUserGroupV1Output';
export declare class ListInvitesFromUserGroup200Response {
    'data'?: ListInvitesFromUserGroupV1Output;
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

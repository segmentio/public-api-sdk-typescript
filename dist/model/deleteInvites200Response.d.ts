import { DeleteInvitesV1Output } from './deleteInvitesV1Output';
export declare class DeleteInvites200Response {
    'data'?: DeleteInvitesV1Output;
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

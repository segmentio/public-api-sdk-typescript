import { DeleteUserGroupV1Output } from './deleteUserGroupV1Output';
export declare class DeleteUserGroup200Response {
    'data'?: DeleteUserGroupV1Output;
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

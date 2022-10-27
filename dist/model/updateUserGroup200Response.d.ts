import { UpdateUserGroupV1Output } from './updateUserGroupV1Output';
export declare class UpdateUserGroup200Response {
    'data'?: UpdateUserGroupV1Output;
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

import { ReplacePermissionsForUserGroupV1Output } from './replacePermissionsForUserGroupV1Output';
export declare class ReplacePermissionsForUserGroup200Response {
    'data'?: ReplacePermissionsForUserGroupV1Output;
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

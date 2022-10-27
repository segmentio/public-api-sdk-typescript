import { ListRolesV1Output } from './listRolesV1Output';
export declare class ListRoles200Response {
    'data'?: ListRolesV1Output;
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

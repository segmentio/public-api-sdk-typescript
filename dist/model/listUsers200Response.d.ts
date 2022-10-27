import { ListUsersV1Output } from './listUsersV1Output';
export declare class ListUsers200Response {
    'data'?: ListUsersV1Output;
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

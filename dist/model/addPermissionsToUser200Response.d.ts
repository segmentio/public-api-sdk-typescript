import { AddPermissionsToUserV1Output } from './addPermissionsToUserV1Output';
export declare class AddPermissionsToUser200Response {
    'data'?: AddPermissionsToUserV1Output;
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

import { ReplacePermissionsForUserV1Output } from './replacePermissionsForUserV1Output';
export declare class ReplacePermissionsForUser200Response {
    'data'?: ReplacePermissionsForUserV1Output;
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

import { GetUserGroupV1Output } from './getUserGroupV1Output';
export declare class GetUserGroup200Response {
    'data'?: GetUserGroupV1Output;
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

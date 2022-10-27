import { DeleteUsersV1Output } from './deleteUsersV1Output';
export declare class DeleteUsers200Response {
    'data'?: DeleteUsersV1Output;
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

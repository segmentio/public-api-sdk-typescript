import { ListCredentialsV1Output } from './listCredentialsV1Output';
export declare class ListCredentials200Response {
    'data'?: ListCredentialsV1Output;
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

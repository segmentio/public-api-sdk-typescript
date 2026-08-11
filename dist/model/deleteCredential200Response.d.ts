import { DeleteCredentialV1Output } from './deleteCredentialV1Output';
export declare class DeleteCredential200Response {
    'data'?: DeleteCredentialV1Output;
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

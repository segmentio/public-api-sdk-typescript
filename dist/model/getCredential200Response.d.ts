import { GetCredentialV1Output } from './getCredentialV1Output';
export declare class GetCredential200Response {
    'data'?: GetCredentialV1Output;
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

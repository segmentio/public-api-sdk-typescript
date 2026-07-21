import { CreateCredentialV1Output } from './createCredentialV1Output';
export declare class CreateCredential201Response {
    'data'?: CreateCredentialV1Output;
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

import { UpdateCredentialV1Output } from './updateCredentialV1Output';
export declare class UpdateCredential200Response {
    'data'?: UpdateCredentialV1Output;
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

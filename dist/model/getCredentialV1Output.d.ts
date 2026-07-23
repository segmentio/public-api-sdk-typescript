import { CredentialV1 } from './credentialV1';
export declare class GetCredentialV1Output {
    'credential': CredentialV1;
    'disabledFields'?: Array<string>;
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

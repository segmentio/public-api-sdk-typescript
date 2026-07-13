import { CredentialV1 } from './credentialV1';
export declare class UpdateCredentialV1Output {
    'credential': CredentialV1;
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

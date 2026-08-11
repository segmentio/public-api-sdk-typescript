import { CredentialV1 } from './credentialV1';
import { PaginationOutput } from './paginationOutput';
export declare class ListCredentialsV1Output {
    'credentials': Array<CredentialV1>;
    'pagination': PaginationOutput;
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

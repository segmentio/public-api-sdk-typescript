import { ListCredentialConsumersV1Output } from './listCredentialConsumersV1Output';
export declare class ListCredentialConsumers200Response {
    'data'?: ListCredentialConsumersV1Output;
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

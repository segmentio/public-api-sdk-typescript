import { ListWorkspaceRegulationsV1Output } from './listWorkspaceRegulationsV1Output';
export declare class ListWorkspaceRegulations200Response {
    'data'?: ListWorkspaceRegulationsV1Output;
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

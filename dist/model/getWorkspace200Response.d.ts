import { GetWorkspaceV1Output } from './getWorkspaceV1Output';
export declare class GetWorkspace200Response {
    'data'?: GetWorkspaceV1Output;
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

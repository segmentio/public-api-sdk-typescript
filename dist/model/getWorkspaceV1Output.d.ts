import { WorkspaceV1 } from './workspaceV1';
export declare class GetWorkspaceV1Output {
    'workspace': WorkspaceV1;
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
